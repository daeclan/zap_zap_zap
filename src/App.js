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
        color="salmon"
        transparent
        opacity={1.6}
        roughness={1.4}
        metalness={1}
      />
    </mesh>
  );
}

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="red" />
    </mesh>
  )
}



export default function App() {
  return (
    <>
      <Canvas style={{ background: "#998492" }}>
        <directionalLight intensity={0.8} />
        <directionalLight intensity={0.8} position={[0, -10, 0]} />
        <directionalLight intensity={0.6} position={[0, 10, 20]} />
        <spotLight position={[0, 20, 0]} angle={0.3} />
        <Suspense fallback={<Loading />}>
          <Loading />
          <Box />
        </Suspense>
      </Canvas>
    </>
  );
}
