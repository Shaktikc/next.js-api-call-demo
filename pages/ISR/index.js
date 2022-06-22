import React from "react";
import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";

const IncrementalStaticRegeneration = ({ product }) => {
  return (
    <Box ml="2rem" mt="1rem">
      <Text>product: {product.title}</Text>
      <Text>price: {product.price}</Text>
    </Box>
  );
};

export default IncrementalStaticRegeneration;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/products/1");
  const product = await res.json();

  return {
    props: {
      product,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 1, // In seconds
  };
}
