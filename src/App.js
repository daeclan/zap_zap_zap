import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./styles.css";

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="red"
        transparent
        opacity={1.6}
        roughness={1.4}
        metalness={1}
      />
    </mesh>
  );
}



export default function App() {
  return (
    <>
      <Canvas style={{ background: "#ffffff" }}>
        <directionalLight intensity={0.8} />
        <directionalLight intensity={0.8} />
        <directionalLight intensity={0.8} />
        <Suspense fallback={<Loading />}>
          <Loading />
        </Suspense>
      </Canvas>
    </>
  );
}
