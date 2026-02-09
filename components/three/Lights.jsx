"use client";

import { Environment } from "@react-three/drei";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <hemisphereLight intensity={0.35} groundColor="#2a2a2a" color="#dbeafe" />
      <directionalLight
        castShadow
        intensity={1.2}
        position={[4, 5, 3]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight intensity={0.45} position={[-3, 2, -2]} color="#dbeafe" />
      <Environment preset="studio" intensity={0.5} />
    </>
  );
}
