import React from "react";
import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";

function ServerSideRendering({ data }) {
  return (
    <Box ml="2rem" mt="1rem">
      <Text>product: {data.title}</Text>
      <Text>price: {data.price}</Text>
    </Box>
  );
}

// This gets called on every request and it is used when it is need to acess the request and do sth with that
// request eg when fetching the specifc user content.
// also it is used if data that is serve to client should not be stale at all.
export async function getServerSideProps(context) {
  // Fetch data from external API and also any logic can be written here
  const res = await fetch(
    `http://localhost:4000/products/${context.params.productId}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default ServerSideRendering;
