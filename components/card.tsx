"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
const LogoDynamic = dynamic(() =>import("./Logo"));
const LaptopDynamic = dynamic(() =>import("./Laptop"));

function card() {
  return (
    <div className="absolute flex items-center justify-center z-40 w-full h-screen" >
    <Canvas shadows dpr={[1, 1]} camera={{position:[0,0,4],fov:10 }}>
    <ambientLight intensity={0.7} />
     <spotLight intensity={0.7} angle={0.7} penumbra={8} position={[10,15,16]}  castshadow />
    <Suspense fallback={null}>    
   <LaptopDynamic />
   <LogoDynamic />
     <Environment preset="park" />
     </Suspense>
    </Canvas>    
   </div>
  )
}

export default card