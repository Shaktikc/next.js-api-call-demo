import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const post = ({ posts }) => {
  return (
    <Box>
      {posts.map((post) => {
        return (
          <Box
            key={post.id}
            w="30%"
            mt="2rem"
            ml="2rem"
            mb="2rem"
            boxShadow={"lg"}
            bg="green.500"
            padding={"1rem"}
          >
            <Box>
              <Text fontWeight={"bold"}>ID</Text>
              <Text>{post.id}</Text>
            </Box>
            <Box>
              <Text fontWeight={"bold"}>Title</Text>
              <Text>{post.title}</Text>
            </Box>
            <Box>
              <Text fontWeight={"bold"}>Body</Text>
              <Text>{post.body}</Text>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default post;
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
