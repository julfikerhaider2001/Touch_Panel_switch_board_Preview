import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useProgress } from '@react-three/drei'
import { Suspense } from 'react'
import Model from './Model'

function Loader() {
  const { progress, loaded, total } = useProgress()
  console.log(`Loading progress: ${progress}% (${loaded}/${total})`)
  if (progress === 100) return null
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#0a0a0f', color: '#555',
      fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '2px',
      flexDirection: 'column', gap: 12
    }}>
      <div style={{
        width: 180, height: 2, background: '#1c1c26', borderRadius: 2,
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${progress}%`, height: '100%',
          background: '#f3cb7c', transition: 'width 0.3s ease'
        }} />
      </div>
      <span>Loading 3D model &middot; {Math.round(progress)}%</span>
    </div>
  )
}

export default function Scene3D() {
  console.log('Scene3D component rendering...')
  
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [14, 7, 18], fov: 30, near: 0.1, far: 100 }}
        gl={{ antialias: true, toneMapping: 3, toneMappingExposure: 1.4 }}
        style={{ width: '100%', height: '100%' }}
        onCreated={(state) => console.log('Canvas created:', state)}
      >
        <Suspense fallback={<Loader />}>
          <Stage
            environment="city"
            intensity={0.8}
            preset="rembrandt"
            shadows
            adjustCamera={false}
          >
            <Model />
          </Stage>
          <OrbitControls
            autoRotate
            autoRotateSpeed={1.2}
            enableDamping
            dampingFactor={0.06}
            minDistance={5}
            maxDistance={40}
            target={[7.3, 4.3, -0.85]}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
