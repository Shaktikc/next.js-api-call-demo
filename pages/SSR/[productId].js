import React from "react";
import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";

function ServerSideRendering({ data }) {
  // Render data...
  return (
    <Box ml="2rem" mt="1rem">
      <Text>product: {data.title}</Text>
      <Text>price: {data.price}</Text>
    </Box>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `http://localhost:4000/products/${context.params.productId}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default ServerSideRendering;
