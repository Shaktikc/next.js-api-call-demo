import React, { useState } from "react";
import Image from "next/image";
import mingmadai from "../../imges/mingmadai.png";
import Rectangle from "../../imges/Rectangle.png";
import mountain from "../../imges/mountain.png";
import pin from "../../imges/pin.png";
import cloud from "../../imges/cloud.png";
import {
  Box,
  chakra,
  HStack,
  keyframes,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { LineChart } from "../../Components/common/LineChart";

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
  0%   {left:200px; top:0px;}
  50%  { left:220px; top:0px;}
  100%  { left:200px; top:0px;}
`;

const cloudKeyframes = keyframes`
  0%   {left:200px; top:80px;}
  50%  { left:220px; top:80px;}
  100%  { left:200px; top:80px;}
`;

const textDetailKeyframes = keyframes`
  0%   { top:130px;}
  100%  { left:700px; top:130px;}
`;

const animation = `${animationKeyframes} 4s linear infinite`;
const cloudAnimation = `${cloudKeyframes} 5s ease-in-out infinite`;
// const textDetailAnimation = `${textDetailKeyframes} 2s linear infinite `;
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
        // bg="green"
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
      <Box
        as={motion.div}
        animation={cloudAnimation}
        pos="absolute"
        top="1%"
        left={"25%"}
        zIndex={1}
        // bg="red"
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
      <Box pos="absolute" top="15%" left={"21%"} zIndex={5}>
        <Box pos="absolute">
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
      <Box top="21%" left="48%" pos="absolute" zIndex={1} w="50%">
        <SlideFade
          direction="bottom"
          in={true}
          offsetY="50px"
          transition={{ enter: { duration: 0.4 } }}
        >
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
            here will be details here will be detailshere will be detailshere
            will be detailshere will be detailshere will be detailshere will be
            detailshere will be detailshere will be detailshere will be
            detaihere will be detailshere will be detailshere will be
            detailshere will be detailshere will be detailshere will be
            detailshere will be details.
          </Text>
        </SlideFade>{" "}
        <LineChart />
      </Box>
    </Box>
  );
};

export default Mountain;
