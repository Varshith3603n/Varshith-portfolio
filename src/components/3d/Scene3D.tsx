import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

interface Scene3DProps {
  children: React.ReactNode;
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
  className?: string;
}

export function Scene3D({ 
  children, 
  enableControls = false, 
  cameraPosition = [0, 0, 5],
  className = "w-full h-full"
}: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <PerspectiveCamera
          makeDefault
          position={cameraPosition}
          fov={60}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#a855f7" intensity={0.5} />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          {children}
        </Suspense>
        
        {enableControls && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        )}
      </Canvas>
    </div>
  );
}