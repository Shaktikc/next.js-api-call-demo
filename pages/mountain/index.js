import React from "react";
import Image from "next/image";
import mingmadai from "../../imges/mingmadai.png";
import { Box } from "@chakra-ui/react";

const Mountain = () => {
  return (
    <Box width={"100vw"} height="100vh" pos="relative">
      <Image src={mingmadai} alt="nicee" objectFit="cover" layout="fill" />
    </Box>
  );
};

export default Mountain;
