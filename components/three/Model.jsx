"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";

const FULL_ROTATION = Math.PI * 2;
const SPIN_DURATION_SECONDS = 3;

export default function Model() {
  const groupRef = useRef(null);
  const initializedRef = useRef(false);
  const startYRef = useRef(0);
  const targetYRef = useRef(FULL_ROTATION);
  const doneRef = useRef(false);

  const { scene } = useGLTF("/models/heart_in_a_bottle.glb");

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (doneRef.current || !groupRef.current) return;

    if (!initializedRef.current) {
      initializedRef.current = true;
      startYRef.current = groupRef.current.rotation.y;
      targetYRef.current = startYRef.current + FULL_ROTATION;
    }

    const step = (FULL_ROTATION / SPIN_DURATION_SECONDS) * delta;
    const next = groupRef.current.rotation.y + step;

    if (next >= targetYRef.current) {
      groupRef.current.rotation.y = targetYRef.current;
      doneRef.current = true;
      return;
    }

    groupRef.current.rotation.y = next;
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} scale={0.04} />
      </Center>
    </group>
  );
}

useGLTF.preload("/models/heart_in_a_bottle.glb");
