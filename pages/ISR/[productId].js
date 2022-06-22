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

//getStaticPaths used for  pre-rendering pages that use dynamic routes
export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }, { params: { productId: "2" } }],
    fallback: "blocking",
    // there is also fallback:true which is simlar to fallback:blocking , but
    //fallback:"true" , will also show the loading or computing taking place events.
    //The paths that have not been generated at build time will not result in a 404 page.
    //Instead, fallback: "blocking" ,This will be used to automatically render
    //the page with the required props.
  };
}

// This function gets called at build time on server-side.
// It is again called on a new request  since revalidate is enabled here,
// revalidate is enabled to ensure the user wouldnt get stale data.
export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:4000/products/${context.params.productId}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 4 seconds
    revalidate: 4, // In seconds
  };
}
