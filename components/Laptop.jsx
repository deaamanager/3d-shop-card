"use client";
import React, { useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { motion } from "framer-motion-3d"
import { useFrame, useThree } from '@react-three/fiber';
function Model(props, Open) {
  // import laptop
  const { nodes, materials } = useGLTF('/models/dealap.glb');
  // react button hook
  const [open, setOpen] = useState(false);
  //console.log(open);
  // react ref
  const ref = useRef();

  // motion for display laptop
  const variantMotion = {
    opened: { rotateX: -0.11 },
    closed: { rotateX: 1.61 },
  };
  useFrame(() => {
    ref.current.rotation.y += 0.003;
    ref.current.scale.set(0.4, 0.4, 0.4);
    ref.current.position.set(0.7, -0.3, 0);
  });

  return (
    <group
      rotation={[0.1, 0.8, 0]}
      ref={ref} {...props} dispose={null}
      castShadow receiveShadow
    >
      <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials['body metal']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane005.geometry} material={materials['total black']} />
      <motion.group
        initial={"closed"}
        animate={open ? "opened" : "closed"}
        variants={variantMotion}
        transition={{ duration: 1, delay: 0.5 }}
        ref={ref}
        position={[0, 0.11, -0.7]}
      >
        <mesh castShadow receiveShadow geometry={nodes.Plane007.geometry} material={materials.plastichead} />
        <mesh castShadow receiveShadow geometry={nodes.Plane007_1.geometry} material={materials['display primary']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane007_2.geometry} material={materials['rog logo']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane007_3.geometry} material={materials['Material.001']} />
      </motion.group>
      <mesh castShadow receiveShadow geometry={nodes.Plane010.geometry} material={materials['total black']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane012.geometry} material={materials['body metal']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane014.geometry} material={materials['body metal']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane017.geometry} material={materials['body metal']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane018.geometry} material={materials['body metal']} />
      <mesh castShadow receiveShadow geometry={nodes.rog.geometry} material={materials['rog logo']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane020.geometry} material={materials.key} />
      <mesh castShadow receiveShadow geometry={nodes.Plane022.geometry} material={materials.key} />
      <mesh castShadow receiveShadow geometry={nodes.Plane021.geometry} material={materials.key} />
      <mesh castShadow receiveShadow geometry={nodes.Plane023.geometry} material={materials.key} />
      <mesh castShadow receiveShadow geometry={nodes.Plane024.geometry} material={materials.key} />
      <mesh castShadow receiveShadow geometry={nodes.Plane025.geometry} material={materials.key} />
      <mesh castShadow receiveShadow geometry={nodes.Plane026.geometry} material={materials.key} />
      <group position={[0, 0.11, -0.7]} rotation={[-0.05, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane036.geometry} material={materials.rgb} />
        <mesh castShadow receiveShadow geometry={nodes.Plane036_1.geometry} material={materials['key f']} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Plane031.geometry} material={materials.key} />
      <mesh castShadow receiveShadow geometry={nodes['rog-zephyrus-duo-se-15-ryzen-9-rtx-3080-gaming-laptop-1000px-v1'].geometry} material={materials['display blank']} />
      <mesh castShadow receiveShadow geometry={nodes.numpad.geometry} material={materials.numpad} />
      <mesh castShadow receiveShadow geometry={nodes.Plane035.geometry} material={materials['plastic black']} />
      <group rotation={[-0.24, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane031_1.geometry} material={materials['body metal']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane031_2.geometry} material={materials.panel} />
        <mesh castShadow receiveShadow geometry={nodes.Plane031_3.geometry} material={materials.Material} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Plane002_1.geometry} material={materials['body metal']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane002_2.geometry} material={materials['some blacc']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane005_1.geometry} material={materials['body metal']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane005_2.geometry} material={materials['some blacc']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane009.geometry} material={materials['body metal']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane009_1.geometry} material={materials['some blacc']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane035_1.geometry} material={materials.metal} />
      <mesh castShadow receiveShadow geometry={nodes.Plane035_2.geometry} material={materials['plastic black']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane035_3.geometry} material={materials.yellow} />
      <mesh castShadow receiveShadow geometry={nodes.Plane035_4.geometry} material={materials['total black']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane045.geometry} material={materials.metal} />
      <mesh castShadow receiveShadow geometry={nodes.Plane045_1.geometry} material={materials['total black']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane045_2.geometry} material={materials.yellow} />
      <mesh castShadow receiveShadow geometry={nodes.Plane045_3.geometry} material={materials['plastic black']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane048.geometry} material={materials.metal} />
      <mesh castShadow receiveShadow geometry={nodes.Plane048_1.geometry} material={materials['total black']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane048_2.geometry} material={materials['plastic black']} />
      <Html center>
        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 1.5, ease: "easeOut", stiffness: 50, damping: 10 }}
        >
          <button
            className=" flex flex-row items-center space-x-2 md:px-5 md:py-2 py-1 px-3  pointGreen md:top-[5rem] md:left-[-15px] left-[0px] top-[3rem]  ml-5 mt-5 md:mt-8 relative text-[8px]  brightness-[0.7] transition-all duration-150 bg-[#111] rounded-full
            border-2 border-green-500  bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-[''] 
            before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]
            before:opacity-30"
            onClick={() => setOpen(!open)}
          >{open ? "Schließen" : "Offen"}</button>
        </motion.div>
      </Html>
    </group>
  )
}
useGLTF.preload('/models/dealap.glb')
export default function Laptop() {
  const { viewport } = useThree();
  return (
    <>
      <motion.mesh
        initial={{ z: -500, opacity: 0 }}
        animate={{ z: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        scale={viewport.width / 3}
        castShadow receiveShadow >
        <Model Open />
      </motion.mesh>
    </>
  )
}