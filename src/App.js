import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import './styles.css';

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
      <DodecahedronWithText />
    </Canvas>
  );
};

export default App;