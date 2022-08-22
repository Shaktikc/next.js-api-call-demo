import React from "react";
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

export const PeakNumberOfMountain = ({
  setArrayData,
  setSpecificIndex,
  specificIndex,
}) => {
  return (
    <>
      {" "}
      <Box
        color="white"
        ml="5.9rem"
        fontSize={"xl"}
        onClick={() => {
          setSpecificIndex(0),
            setArrayData([150, 500, 200, 350, 250, 320, 200, 280, 150]);
        }}
        display={specificIndex === 0 ? "none" : "block"}
        left="0.5%"
        top="32%"
        pos="absolute"
      >
        01
      </Box>
      <Box
        color="white"
        ml="5.9rem"
        fontSize={"xl"}
        pos="absolute"
        left="1.7%"
        top="35%"
        onClick={() => {
          setSpecificIndex(1);
          setArrayData([150, 350, 200, 500, 200, 320, 200, 280, 150]);
        }}
        display={specificIndex === 1 ? "none" : "block"}
      >
        02
      </Box>
      <Box
        color="white"
        ml="5.9rem"
        fontSize={"xl"}
        pos="absolute"
        left="7.5%"
        top="35%"
        onClick={() => {
          setSpecificIndex(1);
          setArrayData([150, 350, 200, 500, 200, 320, 200, 280, 150]);
        }}
        display={specificIndex === 1 ? "none" : "block"}
      >
        03
      </Box>
      <Box
        color="white"
        ml="5.9rem"
        fontSize={"xl"}
        pos="absolute"
        left="12.5%"
        top="35%"
        onClick={() => {
          setSpecificIndex(1);
          setArrayData([150, 350, 200, 500, 200, 320, 200, 280, 150]);
        }}
        display={specificIndex === 1 ? "none" : "block"}
      >
        04
      </Box>
    </>
  );
};
