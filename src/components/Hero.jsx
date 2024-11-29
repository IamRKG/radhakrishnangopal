import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ParticleField from './ParticleField'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-black via-purple-900 to-gray-900">
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, isMobile ? 8 : 5], fov: 75 }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <ParticleField count={isMobile ? 2000 : 5000} />
        </Canvas>
      </div>
      
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        <div className="text-center max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
            Radhakrishnan Gopal
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide">
            Full Stack Developer & 3D Enthusiast
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all hover:scale-105 text-white text-base sm:text-lg">
              View Projects
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button className="group border-2 border-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all hover:bg-purple-600/20 hover:scale-105 text-white text-base sm:text-lg">
              Contact Me
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero
