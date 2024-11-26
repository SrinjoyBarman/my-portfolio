import { FC } from "react";

interface AvatarProps {
  position: [number, number, number];
}

const Avatar: FC<AvatarProps> = ({ position }) => {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </group>
  );
};

export default Avatar;
