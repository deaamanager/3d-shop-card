"use client";
import { useGLTF } from '@react-three/drei'
import {  useFrame, useThree } from '@react-three/fiber';
import  {  useRef} from 'react'
 function Model(props) {
    const { nodes, materials } = useGLTF('/models/logo.glb');
    const ref = useRef();
    
    useFrame(() => {
        ref.current.rotation.y += 0.005;
        ref.current.position.set(1.7, 1, 0);
        ref.current.scale.set(0.1, 0.1, 0.1);
    });
  return (
    <group
     ref={ref}
    {...props} dispose={null}>
    <group scale={0.04}>
      <group position={[-1.08, 37.11, 1.53]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-3.77, -1.37, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.95, 0.95, 0.11]}>
          <group position={[2.8, -2.54, -1.4]}>
            <mesh castShadow receiveShadow geometry={nodes['Line002_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
            <mesh castShadow receiveShadow geometry={nodes.Line002_Transparent_0.geometry} material={materials.Transparent} />
          </group>
        </group>
        <group position={[-3.77, -1.37, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.95, 0.95, 0.11]}>
          <group position={[2.8, -2.54, -1.4]}>
            <mesh castShadow receiveShadow geometry={nodes['Object001_Material_#1_0'].geometry} material={materials.Material_1} />
            <mesh castShadow receiveShadow geometry={nodes.Object001_Transparent_0.geometry} material={materials.Transparent} />
            <mesh castShadow receiveShadow geometry={nodes['Object001_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
          </group>
        </group>
        <group position={[0.72, 0.1, -2]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-1, 1, 0.55]}>
          <mesh castShadow receiveShadow geometry={nodes['Tube002_07_-_Default_0'].geometry} material={materials['07_-_Default']} position={[0, 0, -2.6]} />
        </group>
      </group>
    </group>
  </group>
  )
}
useGLTF.preload('/models/logo.glb')




export default function Logo(){
    const {viewport} = useThree();
 return (
    <>
     <mesh
     scale={viewport.width / 4}
     castShadow receiveShadow >
          <Model  />
    </mesh>
    </>
 )
}


