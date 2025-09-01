import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface SkillOrbProps {
  skill: string;
  position: [number, number, number];
  color: string;
  index: number;
}

export function SkillOrb({ skill, position, color, index }: SkillOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const textRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * (0.5 + index * 0.1);
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime + index) * 0.1;
    }
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <Float speed={1 + index * 0.2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        {/* Skill Orb */}
        <mesh ref={meshRef} scale={0.8}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.2}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Skill Text */}
        <group ref={textRef}>
          <Text
            position={[0, 0, 1.2]}
            fontSize={0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
          >
            {skill}
          </Text>
        </group>

        {/* Outer Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]} scale={1.5}>
          <ringGeometry args={[1.1, 1.3, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
}