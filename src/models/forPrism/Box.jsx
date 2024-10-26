import * as THREE from 'three'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { lerp, lerpC, lerpV3 } from '../../utilities/util'

const w = 1
const h = 1
const r = 0.1
const depth = 1
const s = new THREE.Shape()
s.moveTo(-w / 2, -h / 2 + r)
s.lineTo(-w / 2, h / 2 - r)
s.absarc(-w / 2 + r, h / 2 - r, r, 1 * Math.PI, 0.5 * Math.PI, true)
s.lineTo(w / 2 - r, h / 2)
s.absarc(w / 2 - r, h / 2 - r, r, 0.5 * Math.PI, 0 * Math.PI, true)
s.lineTo(w / 2, -h / 2 + r)
s.absarc(w / 2 - r, -h / 2 + r, r, 2 * Math.PI, 1.5 * Math.PI, true)
s.lineTo(-w / 2 + r, -h / 2)
s.absarc(-w / 2 + r, -h / 2 + r, r, 1.5 * Math.PI, 1 * Math.PI, true)

const boxGeometry = new THREE.BoxGeometry()
const boxGeomtery2 = new THREE.BoxGeometry()
const roundedBoxGeometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false })
roundedBoxGeometry.translate(0, 0, -depth / 2)
roundedBoxGeometry.computeVertexNormals()

 const Box = forwardRef(( { onHoverChange = () => {}, ...props }, ref) => {
  const [hovered, hover] = useState(false)
  const inner = useRef(null)
  const outer = useRef(null)
  
  useFrame(() => {
    lerpC(inner.current.material.emissive, hovered ? 'white' : '#454545', 0.1)
    // lerpV3(inner.current.scale, hovered ? [4,1,1] : [1,1,1], 0.04)

  })

  // console.log(inner.current)
  useEffect(() => {
    onHoverChange(hovered)
  }, [hovered])


  return (
    <group scale={0.5} ref={ref} {...props}>
      
      <mesh visible={false} ref={outer} onRayOver={() => hover(true)} onRayOut={() => hover(false)} geometry={boxGeometry} />
      
      <mesh ref={inner} geometry={roundedBoxGeometry}  >
        <meshStandardMaterial color="#333" toneMapped={false} emissiveIntensity={2} />
      </mesh>

    </group>
  )
})

export default Box
