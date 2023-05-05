import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import './App.css';

const DodecahedronWithText = () => {
  const dodecahedronRef = useRef();
  const radius = 2;

  useFrame(() => {
    if (dodecahedronRef.current) {
      dodecahedronRef.current.rotation.x += 0.01;
      dodecahedronRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={dodecahedronRef}>
      <dodecahedronGeometry args={[radius]} />
      <meshNormalMaterial />
      {/* Add Text components for each face */}
      <Text position={[0, 0, 0]} fontSize={1} color="black">
        Face 1
      </Text>
      {/* ... */}
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ background: 'white' }} camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight />
      <spotLight color="black" position={[0, 10, 0]} intensity={0.3} angle={Math.PI / 2} penumbra={0.9} castShadow shadowBias={-0.001} />
      <DodecahedronWithText />
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeBufferGeometry args={[5,5]} />
        <meshStandardMaterial color="#878786" transparent opacity={1} />
      </mesh>
    </Canvas>
  );
};

export default App;