import React, { useState } from "react";
import Image from "next/image";
import mingmadai from "../../imges/mingmadai.png";
import Rectangle from "../../imges/Rectangle.png";
import mountain from "../../imges/mountain.png";
import pin from "../../imges/pin.png";
import cloud from "../../imges/cloud.png";
import ganesh from "../../imges/ganesh.jpg";
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
import { PeakNumberOfMountain } from "./PeakNumberOfMountain";

const mountainData = [
  {
    title: "K2 mountian",
    DetailText:
      "lkdsjflk lkjdflkj sadlkfj lkasdjf lkadsfjlk jlk sfkja lkjsaflk ajflkadsfj lkadfsj lkjf lkj dfk jaslkf jaslkfj ",
    image: mountain,
  },
  {
    title: "Mount Everest",
    DetailText:
      "here will be details here will be detailshere will be,here will be details here will be detailshere will be",
    state: true,
    image: ganesh,
  },
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
  0%   {left:18vw; top:0px;}
  50%  { left:20vw; top:0px;}
  100%  { left:18vw; top:0px;}
`;

const cloudKeyframes = keyframes`
  0%   {left:18vw; top:4vw;}
  50%  { left:20vw; top:4vw;}
  100%  { left:18vw; top:4vw;}
`;

const textDetailKeyframes = keyframes`
  0%   { top:130px;}
  100%  { left:700px; top:130px;}
`;

const animation = `${animationKeyframes} 8s linear infinite`;
const cloudAnimation = `${cloudKeyframes} 10s ease-in-out infinite`;
// const textDetailAnimation = `${textDetailKeyframes} 2s linear infinite `;
const Mountain = () => {
  const [mountainInfo, setMountainInfo] = useState({
    title: "Mount Everest",
    DetailText:
      "here will be details here will be detailshere will be,here will be details here will be detailshere will be",
    state: true,
  });
  const [specificIndex, setSpecificIndex] = useState(0);
  const [arrayData, setArrayData] = useState([
    150, 500, 200, 280, 200, 280, 200, 280, 200, 280, 200, 280, 200, 280, 200,
    280, 200, 280, 200, 280, 200, 280, 200, 280, 200, 280, 200, 280, 200, 280,
    200, 280, 200,
  ]);
  console.log("specificIndex", specificIndex);
  return (
    <Box>
      <Box zIndex={1} w="100%" h="100vh" pos="absolute">
        <ProductImage
          src={mingmadai}
          alt="nicee"
          objectFit="cover"
          layout="fill"
        />
      </Box>
      <Box
        color="gray.500"
        fontWeight={"bold"}
        pos="absolute"
        // ml="5.9rem"
        fontSize={"9xl"}
        // onClick={() => {
        //   setSpecificIndex(0),
        //     setArrayData([150, 500, 200, 350, 250, 320, 200, 280, 150]);
        // }}
        // display={specificIndex === 0 ? "none" : "block"}
        mt={{ sm: "80%", xl: "2%" }}
        left={{ sm: "25%", xl: "49%" }}
        zIndex={"auto"}
      >
        01
      </Box>
      <Box pos="absolute" top="0" zIndex={-1} w="100%" h="100vh">
        {" "}
        <ProductImage
          src={Rectangle}
          alt="nicee"
          objectFit="cover"
          layout="fill"
        />
      </Box>
      <Box pos="relative" mr={{ xl: "30%" }} zIndex={10}>
        {" "}
        <Box
          as={motion.div}
          animation={animation}
          pos="absolute"
          // left={"15%"}
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
            // layout="fixed"
            objectFit={"contain"}
          />
        </Box>
        <Box
          as={motion.div}
          animation={cloudAnimation}
          pos="absolute"
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
            // layout="fixed"
            objectFit={"contain"}
          />
        </Box>
        <Box zIndex={2} pos={"absolute"} top={"137px"}>
          <Grid
            templateColumns={{ xl: "repeat(2, 1fr)" }}
            justifyItems="end"
            // gap="6px"
            pos="relative"
            mt={{ sm: "-5rem", xl: "0rem" }}
            gap="1rem"
            ml={{ xl: "25%" }}
            width={{ xl: "100%" }}
            // lineHeight="1rem"
          >
            {/* <Box
            color="white"
            // ml="5.9rem"
            fontSize={"4xl"}
            // onClick={() => {
            //   setSpecificIndex(0),
            //     setArrayData([150, 500, 200, 350, 250, 320, 200, 280, 150]);
            // }}
            // display={specificIndex === 0 ? "none" : "block"}
            // left="0.5%"
            // top="32%"
            pos="absolute"
          >
            01
          </Box> */}
            <GridItem
              colSpan={1}
              w={{ sm: "100%", md: "100%", xl: "70%" }}
              padding={{ sm: "1rem", xl: "0.5rem" }}
            >
              {mountainData.map((data, indx) => {
                return (
                  <Box
                    key={data.title}
                    display={specificIndex === indx ? "block" : "none"}
                  >
                    <SlideFade
                      direction="bottom"
                      // in={true}
                      in={specificIndex === indx ? true : false}
                      // unmountOnExit={true}
                      offsetY="50px"
                      transition={{ enter: { duration: 0.4 } }}
                    >
                      {" "}
                      <ProductImage
                        src={data.image}
                        // borderWidth={5}
                        // borderStyle="solid"
                        // objectFit={"contain"}
                        // width="400px"
                        // height={"300px"}
                        // layout="responsive"
                        zIndex={9}
                      />
                    </SlideFade>
                  </Box>
                );
              })}
            </GridItem>
            <GridItem
              colSpan={1}
              padding={{ sm: "1.5rem", xl: "0rem" }}
              zIndex={10}
            >
              {mountainData.map((data, indx) => {
                return (
                  <Box
                    key={data.title}
                    display={specificIndex === indx ? "block" : "none"}
                    zIndex={10}
                  >
                    <SlideFade
                      direction="bottom"
                      in={specificIndex === indx ? true : false}
                      // unmountOnExit={true}
                      offsetY="50px"
                      transition={{ enter: { duration: 0.4 } }}
                      zIndex={10}
                    >
                      {" "}
                      <Text
                        color="white"
                        fontSize="3xl"
                        mt={{ sm: "-2rem", xl: "0rem" }}
                      >
                        {data.title}
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
                      <Text
                        color="white"
                        fontSize="xl"
                        mt={{ sm: "1rem", xl: "2rem" }}
                        w={{ xl: "70%" }}
                        zIndex={10}

                        // w={{ sm: "20%", md: "40%", xl: "70%" }}
                      >
                        {data.DetailText}
                      </Text>
                    </SlideFade>
                  </Box>
                );
              })}
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(11, 1fr)" gap={8} mt="1.2rem">
            <GridItem colStart={{ sm: 1, xl: 4 }} colSpan={8} pos="relative">
              <Box
                w={{ sm: "94vw", xl: "0vw" }}
                mt="1rem"
                zIndex={10}
                display="fixed"
                overflowX={{ sm: "scroll", xl: "visible" }}
                // bgColor="green"
              >
                <LineChart
                  setMountainInfo={setMountainInfo}
                  setSpecificIndex={setSpecificIndex}
                  setArrayData={setArrayData}
                  arrayData={arrayData}
                />
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>

      {/* <LineChart /> */}
    </Box>
  );
};

export default Mountain;
