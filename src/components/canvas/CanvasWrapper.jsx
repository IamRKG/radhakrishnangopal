import { Canvas } from '@react-three/fiber'

export default function CanvasWrapper({ children }) {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5]
      }}
    >
      {children}
    </Canvas>
  )
}
