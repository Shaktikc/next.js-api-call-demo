import React from "react";
import Image from "next/image";
import mingmadai from "../../imges/mingmadai.png";
import Rectangle from "../../imges/Rectangle.png";
import mountain from "../../imges/mountain.png";
import pin from "../../imges/pin.png";
import cloud from "../../imges/cloud.png";
import { Box, chakra, HStack, keyframes, Text } from "@chakra-ui/react";
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
  0%   {  top:0px;}
  25%  { left:200px; top:0px;}
`;

const animation = `${animationKeyframes} 3s linear infinite`;
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
      <Box top="21%" left="48%" pos="absolute" zIndex={1}>
        {" "}
        <Text color="white" fontSize="4xl">
          Mount Everest
        </Text>
        <HStack zIndex={1} pos="absolute">
          <ProductImage
            src={pin}
            // width="370%"
            // height="20%"
            // w="200"
            // h="200"
            borderWidth={5}
            borderStyle="solid"
            // zIndex={"2"}
            layout="fixed"
            objectFit={"contain"}
          />
          <Text color="white" fontSize="xl">
            Nepal
          </Text>
        </HStack>
        <Text color="white" fontSize="xl" mt="2rem" w="70%">
          here will be details here will be detailshere will be detailshere will
          be detailshere will be detailshere will be detailshere will be
          detailshere will be detailshere will be detailshere will be detaihere
          will be detailshere will be detailshere will be detailshere will be
          detailshere will be detailshere will be detailshere will be details.
        </Text>
      </Box>
    </Box>
  );
};

export default Mountain;
