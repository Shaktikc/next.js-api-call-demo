import React from "react";
import Image from "next/image";
import mingmadai from "../../imges/mingmadai.png";
import Rectangle from "../../imges/Rectangle.png";
import mountain from "../../imges/mountain.png";
import cloud from "../../imges/cloud.png";
import { Box, chakra, keyframes } from "@chakra-ui/react";
import NextImage from "next/image";
import { motion } from "framer-motion";

const ProductImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
      "layout",
    ].includes(prop),
});

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;
const Mountain = () => {
  return (
    <Box pos="relative" w="100vw" h="100vh">
      <Box zIndex={1} w="100%" h="100%" pos="absolute">
        <ProductImage
          src={mingmadai}
          alt="nicee"
          objectFit="cover"
          layout="fill"
        />
      </Box>

      <Box pos="absolute" top="0" zIndex={-1} w="100%" h="100%">
        {" "}
        <ProductImage
          src={Rectangle}
          alt="nicee"
          objectFit="cover"
          layout="fill"
        />
      </Box>

      {/* <Box>
        <Image src={cloud} alt="nicee" objectFit="cover" layout="fill" />
      </Box> */}

      <Box
        as={motion.div}
        animation={animation}
        pos="absolute"
        top="1%"
        left={"15%"}
        zIndex={10}
      >
        <ProductImage
          src={cloud}
          width="550%"
          // height="20%"
          // w="200"
          // h="200"
          borderWidth={5}
          borderStyle="solid"
          // zIndex={"2"}
          layout="fixed"
          objectFit={"contain"}
        />
      </Box>
      <Box pos="absolute" top="15%" left={"21%"} zIndex={1}>
        <ProductImage
          src={mountain}
          width="370%"
          // height="20%"
          // w="200"
          // h="200"
          borderWidth={5}
          borderStyle="solid"
          // zIndex={"2"}
          layout="fixed"
          objectFit={"contain"}
        />
      </Box>
    </Box>
  );
};

export default Mountain;
