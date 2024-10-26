// import * as THREE from 'three'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, LUT } from '@react-three/postprocessing'
import { LUTCubeLoader } from 'postprocessing'
import PScene from '../components/PScene'
import { Suspense } from 'react'
import Loader from '../components/Loader'


export default function App() {
  const texture = useLoader(LUTCubeLoader, '/lut/F-6800-STD.cube')
  return (
    <section className='w-full h-full relative'>
    <Canvas orthographic gl={{ antialias: false }} camera={{ position: [0, 0, 100], zoom: 70 }} dpr={window.devicePixelRatio} style={{ width: '100vw', height: '100vh', display:'block' }}>
    <Suspense fallback={<Loader />}>
      <color attach="background" args={['black']} />
      <PScene />
      <EffectComposer disableNormalPass>
        <Bloom mipmapBlur levels={9} intensity={1.5} luminanceThreshold={1} luminanceSmoothing={1} />
        <LUT lut={texture} />
      </EffectComposer>
    </Suspense>
    </Canvas>
    </section>
  )
}