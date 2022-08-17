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
import { interpolate } from "flubber";

// Paths taken from https://github.com/veltman/flubber/blob/master/demos/basic-svg.html
export const star =
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
export const heart =
  "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
export const hand =
  "M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z";
export const plane =
  "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z";
export const lightning = "M7 2v11h3v9l7-12h-4l4-8z";
export const note =
  "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z";

const paths = [lightning, hand, plane, heart, note, star, lightning];
const colors = [
  "#00cc88",
  "#0099ff",
  "#8855ff",
  "#ff0055",
  "#ee4444",
  "#ffcc00",
  "#00cc88",
];

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
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  React.useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex]);
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
      </Box>
      <svg width="400" height="400">
        <g transform="translate(10 10) scale(17 17)">
          <motion.path fill={fill} d={path} />
        </g>
      </svg>
    </Box>
  );
};

export default Mountain;

const getIndex = (_any, index) => index;

function useFlubber(progress, paths) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  });
}
