import React from "react";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import myFont from "three/examples/fonts/helvetiker_regular.typeface.json"; // Built-in font

// Extend TextGeometry so React Three Fiber can use it
extend({ TextGeometry });

const ThreeDText = () => {
  const font = useLoader(FontLoader, myFont);

  return (
    <mesh>
      <textGeometry args={["Portfolio", { font, size: 1, height: 0.2 }]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
};

const ThreeDScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ThreeDText />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDScene;
