import React from "react";
import Image from "next/image";
import mingmadai from "../../imges/mingmadai.png";
import Rectangle from "../../imges/Rectangle.png";
import cloud from "../../imges/cloud.png";
import { Box } from "@chakra-ui/react";

const Mountain = () => {
  return (
    <Box>
      <Box width={"100vw"} height="100vh" pos="relative" zIndex={"1"}>
        <Image src={mingmadai} alt="nicee" objectFit="cover" layout="fill" />
      </Box>
      <Box zIndex="-1">
        <Image src={Rectangle} alt="nicee" objectFit="cover" layout="fill" />
      </Box>
      <Box>
        <Image src={cloud} alt="nicee" objectFit="cover" layout="fill" />
      </Box>
    </Box>
  );
};

export default Mountain;
