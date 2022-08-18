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
  Container,
  Grid,
  GridItem,
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
    <Box>
      <Box zIndex={2} w="100%" h="100vh" pos="absolute">
        <ProductImage
          src={mingmadai}
          alt="nicee"
          objectFit="cover"
          layout="fill"
        />
      </Box>
      <Box pos="absolute" top="0" zIndex={1} w="100%" h="100vh">
        {" "}
        <ProductImage
          src={Rectangle}
          alt="nicee"
          objectFit="cover"
          layout="fill"
        />
      </Box>

      <Box zIndex={2} pos={"absolute"} top={"50px"}>
        <Grid templateColumns="repeat(2, 1fr)" justifyItems="end" gap="6px">
          <GridItem colSpan={1}>
            <ProductImage
              src={mountain}
              // borderWidth={5}
              // borderStyle="solid"
              // objectFit={"contain"}
              width="400px"
              height={"300px"}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <SlideFade
              direction="bottom"
              in={true}
              offsetY="50px"
              transition={{ enter: { duration: 0.4 } }}
            >
              {" "}
              <Text color="white" fontSize="3xl">
                Mount Everest
              </Text>
              <HStack>
                <ProductImage
                  src={pin}
                  // width="370%"
                  // height="20%"
                  // w="200"
                  // h="200"
                  borderWidth={5}
                  borderStyle="solid"
                  layout="fixed"
                  objectFit={"contain"}
                />
                <Text color="white" fontSize="md">
                  Nepal
                </Text>
              </HStack>
              <Text color="white" fontSize="xl" mt="2rem" w="70%">
                here will be details here will be detailshere will be
                detailshere will be detailshere will be detailshere will be
                detailshere will be detailshere will be detailshere will be
                detailshere will be detaihere will be detailshere will be
                detailshere will be detailshere will be detailshere will be
                detailshere will be detailshere will be details.
              </Text>
            </SlideFade>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(11, 1fr)" gap={8}>
          <GridItem colStart={4} colSpan={4}>
            <Box>
              <LineChart />
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* <LineChart /> */}
    </Box>
  );
};

export default Mountain;
