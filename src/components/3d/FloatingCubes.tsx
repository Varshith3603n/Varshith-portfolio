import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingCubes() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Central Large Cube */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[0, 0, 0]} scale={1.5}>
          <boxGeometry args={[1, 1, 1]} />
          <MeshDistortMaterial
            color="#00ffff"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Floating Side Cubes */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 0.5) * 2;

        return (
          <Float
            key={i}
            speed={1 + i * 0.2}
            rotationIntensity={1 + i * 0.1}
            floatIntensity={1}
          >
            <mesh position={[x, y, z]} scale={0.5 + Math.sin(i) * 0.2}>
              <boxGeometry args={[0.8, 0.8, 0.8]} />
              <MeshDistortMaterial
                color={i % 2 === 0 ? "#a855f7" : "#ec4899"}
                attach="material"
                distort={0.2}
                speed={1.5}
                roughness={0.2}
                metalness={0.6}
                transparent
                opacity={0.7}
              />
            </mesh>
          </Float>
        );
      })}

      {/* Ambient Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float
          key={`particle-${i}`}
          speed={0.5 + i * 0.1}
          rotationIntensity={0.5}
          floatIntensity={3}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 15,
            ]}
            scale={0.1 + Math.random() * 0.1}
          >
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial
              color="#00ffff"
              transparent
              opacity={0.4 + Math.random() * 0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}