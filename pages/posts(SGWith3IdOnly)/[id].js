import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

// here three page(i.e. id = 1 , id = 2 and id = 3)  is pre render  during project build,but if differnt id is enter in url
// then 404 page is returned
const Post = ({ post }) => {
  return (
    <Box>
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
    </Box>
  );
};

export default Post;

//getStaticPaths used for  pre-rendering pages that use dynamic routes
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "3" } },
      {
        params: { id: "2" },
        // with i18n configured the locale for the path can be returned as well
      },
    ],
    fallback: false,
    //The paths that have not been generated at build time will not result in a 404 page.
    //Instead, fallback: true This will be used to automatically render
    //the page with the required props.
  };
}

// by getStaticProps the page is available at build time ahead of a user’s request which helps in SEO
export async function getStaticProps(context) {
  console.log("contex", context);
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post,
    },
  };
}
