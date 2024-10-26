import * as THREE from 'three'
import React, { useRef, useCallback, useState, useEffect, startTransition, Suspense } from 'react'
import { Center, Text3D } from '@react-three/drei'
import { Box, Flare, Prism, Rainbow, TextBlock, Beam } from '../models/forPrism'
import { calculateRefractionAngle, lerp, lerpV3 } from '../utilities/util'
import { boxProps } from '../constants'
import { useFrame } from '@react-three/fiber'
import Loader from './Loader'


const PScene = () => {
    const [isPrismHit, hitPrism] = useState(false)
    const flare = useRef(null)
    const ambient = useRef(null)
    const spot = useRef(null)
    const boxreflect = useRef(null)
    const rainbow = useRef(null)    
    
    const rayOut = useCallback(() => {
        hitPrism(false)

      }
      , [isPrismHit])

    const rayOver = useCallback((e) => {
      // Break raycast so the ray stops when it touches the prism
      e.stopPropagation()
      hitPrism(true)
  
      // Set the intensity really high on first contact
      rainbow.current.material.speed = 1
      rainbow.current.material.emissiveIntensity = 20
  
    }, [])
  
    const vec = new THREE.Vector3()
    
    const rayMove = useCallback(({ api, position, direction, normal }) => {
      if (!normal) return
      // Extend the line to the prisms center
      vec.toArray(api.positions, api.number++ * 3)
      // Set flare
      flare.current.position.set(position.x, position.y, -0.5)
      flare.current.rotation.set(0, 0, -Math.atan2(direction.x, direction.y))
      // Calculate refraction angles
      let angleScreenCenter = Math.atan2(-position.y, -position.x)
      const normalAngle = Math.atan2(normal.y, normal.x)
      // The angle between the ray and the normal
      const incidentAngle = angleScreenCenter - normalAngle
      // Calculate the refraction for the incident angle
      const refractionAngle = calculateRefractionAngle(incidentAngle) * 6
      // Apply the refraction
      angleScreenCenter += refractionAngle
      rainbow.current.rotation.z = angleScreenCenter
      // Set spot light
      lerpV3(spot.current.target.position, [Math.cos(angleScreenCenter), Math.sin(angleScreenCenter), 0], 0.05)
      spot.current.target.updateMatrixWorld()
    }, [])
  
  
  
    useFrame((state) => {

      if (boxreflect.current) {
        boxreflect.current.setRay([(state.pointer.x * state.viewport.width) / 2, (state.pointer.y * state.viewport.height) / 2, 0], [0, 0, 0])
      
  
      // Animate rainbow intensity
      lerp(rainbow.current.material, 'emissiveIntensity', isPrismHit ? 2.5 : 0, 0.1)
      spot.current.intensity = rainbow.current.material.emissiveIntensity
      // Animate ambience
      lerp(ambient.current, 'intensity', 0, 0.025)
      }
    })
  

    const [currentStage, setCurrentStage] = useState(null)
    const [boxhit, isHit] = useState(null)
    const boxRef1 = useRef(null)
    const boxRef2 = useRef(null)
    const boxRef3 = useRef(null)

  



    return (
      <>
        
        {/* Lights */}
        <ambientLight ref={ambient} intensity={0} />
        <pointLight position={[10, -10, 0]} intensity={0.05} />
        <pointLight position={[0, 10, 0]} intensity={0.05} />
        <pointLight position={[-10, 0, 0]} intensity={0.05} />
        {/* <spotLight intensity={200} distance={40} angle={2.5} penumbra={.5} position={[-2, 4, 3]} /> */}
        <spotLight ref={spot} intensity={1} distance={7} angle={1} penumbra={1} position={[0, 0, 1]} />

        {/* Caption */}
        {/* <Center top bottom position={[5.5, 2, 0]}>
          <Text3D size={0.4} letterSpacing={-0.05} height={0.05} font="/public/fonts/Press_Regular.json">
            IMAGINAL LEXICOGRAPHER
            <meshStandardMaterial color="white" />
          </Text3D>
        </Center> */}

        {/* Prism + blocks + reflect beam */}
        <Beam ref={boxreflect} bounce={10} far={20}>
          <Prism position={[0, -0.5, 0]} onRayOver={rayOver} onRayOut={rayOut} onRayMove={rayMove} />
          <Box position={[2.25, -3.5, 0]} rotation={[0, 0, Math.PI / 3.5]} ref={boxRef1} />
          <Box position={[-2.5, -2.5, 0]} rotation={[0, 0, Math.PI / 4]} ref={boxRef2} />
          <Box position={[-3, 1, 0]} rotation={[0, 0, Math.PI / 4]} ref={boxRef3} />
        </Beam>

      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <TextBlock currentStage={defineState} />}
      </div> */}
  


        {/* Rainbow and flares */}
        <Rainbow ref={rainbow} startRadius={0} endRadius={0.5} fade={0} />
        <Flare ref={flare} visible={isPrismHit} renderOrder={10} scale={1.25} streak={[12.5, 20, 1]} />
        
      </>
    )
  }
  

export default PScene