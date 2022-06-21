import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

// here three page(i.e. id = 1 , id = 2 and id = 3)  is pre render  during project build,but if differnt id is enter in url
// then other id page are also SG(statically generated)or pre render, and if any other user enter the same id, then same page is delivired, but if new id is entered then
// page is again SG.
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
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "3" } },
      {
        params: { id: "2" },
      },
    ],
    fallback: "blocking", // there is also fallback:true which is simlar to fallback:blocking , but
    //fallback:"true" , will also show the loading or computing taking place events.
    //The paths that have not been generated at build time will not result in a 404 page.
    //Instead, fallback: "blocking" ,This will be used to automatically render
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
