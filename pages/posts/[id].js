import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Post = ({ post }) => {
  // const router = useRouter();
  // console.log("router", router);
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
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  // const paths = posts.map(({ slug }) => ({ params: { slug: `${slug}` } }));
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "3" } },
      {
        params: { id: "2" },
        // with i18n configured the locale for the path can be returned as well
      },
    ],
    fallback: true,
    //The paths that have not been generated at build time will not result in a 404 page.
    //Instead, fallback: true This will be used to automatically render
    //the page with the required props.
  };
}

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
