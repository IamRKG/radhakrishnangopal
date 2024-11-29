import { Environment, PerspectiveCamera } from '@react-three/drei'

export default function Scene({ children }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {children}
    </>
  )
}
