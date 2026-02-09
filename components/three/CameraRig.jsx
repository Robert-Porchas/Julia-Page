"use client";

import { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export default function CameraRig() {
  const camera = useThree((state) => state.camera);
  const pointer = useThree((state) => state.pointer);

  useEffect(() => {
    camera.position.set(0, -0.9, 30);
    camera.fov = 90;
    camera.near = 0.1;
    camera.far = 100;
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame((_, delta) => {
    const targetX = pointer.x * 0.14;
    const targetY = -0.8 + pointer.y * 0.08;
    const targetZ = 13;

    const lerpFactor = Math.min(1, delta * 1.8);

    const minZ = 9; // this will be the closest the camera gets
    const maxZ = 20; // this will be the farthest the camera gets
    camera.position.x += (targetX - camera.position.x) * lerpFactor;
    camera.position.y += (targetY - camera.position.y) * lerpFactor;
    camera.position.z += (targetZ - camera.position.z) * lerpFactor;
    camera.position.z = Math.max(minZ, Math.min(maxZ, camera.position.z));
    camera.lookAt(0, 0, 0);
  });

  return null;
}
