import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const ThreeDBackground = () => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full -z-10">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <Sphere args={[1, 100, 100]} position={[0, 0, -3]}>
        <MeshDistortMaterial
          color="#ff007f"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeDBackground; // ✅ Ensure default export
