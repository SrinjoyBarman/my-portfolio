import { FC } from "react";
import { Box, Plane } from "@react-three/drei";

interface CubicleProps {
  position: [number, number, number];
}

const Cubicle: FC<CubicleProps> = ({ position }) => {
  // Create the floor for the cubicle
  const Floor = () => (
    <Plane args={[30, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <meshBasicMaterial color="lightgray" />
    </Plane>
  );

  // Create a table
  const Table = () => (
    <Box args={[7, 2, 2]} position={[0, 4, 0]}>
      <meshStandardMaterial color="brown" />
    </Box>
  );

  // Create chairs
  const Chair = ({ position }: { position: [number, number, number] }) => (
    <Box args={[1, 2, 1]} position={position}>
      <meshStandardMaterial color="blue" />
    </Box>
  );

  return (
    <group position={position}>
      <Floor />
      <Table />
      {/* <Chair position={[-2, 0.05, -2]} />
      <Chair position={[2, 0.05, -2]} />
      <Chair position={[-2, 0.05, 2]} />
      <Chair position={[2, 0.05, 2]} /> */}
    </group>
  );
};

export default Cubicle;
