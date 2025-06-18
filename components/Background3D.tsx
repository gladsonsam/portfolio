import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import React from 'react';

const ParticleField: React.FC = () => {
  const points = useRef<THREE.Points>(null);
  const count = 300;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
      points.current.rotation.y = state.clock.elapsedTime * 0.015;
      points.current.rotation.z = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
}


const Background3D: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: '#000000' }}
          gl={{ antialias: false, alpha: false }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          
          <ParticleField />
          
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          
        </Suspense>
      </Canvas>
    </div>
    <div className="fixed inset-0 bg-gradient-to-b from-black/50 to-black/70 -z-10" />
    </>
  );
};

export default Background3D;