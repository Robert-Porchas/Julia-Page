"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import Lights from "./Lights";
import CameraRig from "./CameraRig";

function FallbackMesh() {
  return (
    <mesh>
      <icosahedronGeometry args={[0.7, 1]} />
      <meshStandardMaterial color="#cbd5e1" metalness={0.2} roughness={0.45} wireframe />
    </mesh>
  );
}

export default function ThreeCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      gl={{ antialias: true, alpha: true }}
      className="h-full w-full"
    >
      <CameraRig />
      <Lights />
      <Suspense fallback={<FallbackMesh />}>
        <Model />
      </Suspense>
      <ContactShadows
        opacity={0.28}
        scale={8}
        blur={2}
        far={5}
        resolution={512}
        position={[0, -1.25, 0]}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 1.8}
        rotateSpeed={0.65}
        dampingFactor={0.08}
        enableDamping
      />
    </Canvas>
  );
}
