import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF("/model/react_logo.glb");
  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.4} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 6.935, 10.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.391, 0.391, 0.5]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/model/react_logo.glb");

export default ReactLogo;
