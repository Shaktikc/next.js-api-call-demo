import React from "react";
import Image from "next/image";
import mingmadai from "../../imges/mingmadai.png";
import Rectangle from "../../imges/Rectangle.png";
import cloud from "../../imges/cloud.png";
import { Box, chakra } from "@chakra-ui/react";
import NextImage from "next/image";

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
    ].includes(prop),
});
const Mountain = () => {
  return (
    <Box pos="relative">
      <Box zIndex={1}>
        <ProductImage
          src={mingmadai}
          alt="nicee"
          objectFit="cover"
          layout="fill"
        />
      </Box>

      <Box pos="absolute" top="0" zIndex={-1}>
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

      <Box pos="absolute" top="0">
        <ProductImage
          src={cloud}
          width={120}
          height={120}
          w="200"
          h="200"
          borderWidth={5}
          borderStyle="solid"
          // zIndex={"2"}
          layout="fixed"
        />
      </Box>
    </Box>
  );
};

export default Mountain;
