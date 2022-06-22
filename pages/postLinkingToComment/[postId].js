import React from "react";
import { useRouter } from "next/router";
import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";

// by adding three dot on the file name with brackets eg: [...param].js , which can be used to catch
// any route with in that page
const Comments = ({ comments }) => {
  const router = useRouter();
  const param = router.query.param || [];
  console.log("param", router);
  return (
    <>
      {comments.map((comment) => {
        return (
          <Box
            key={comment.id}
            bg="blue.500"
            boxShadow={"lg"}
            w="30%"
            mt="1rem"
            ml="2rem"
            p="1rem"
            borderRadius={"0.5rem"}
          >
            <Text>Comment Id :{comment.id}</Text>
            <Text>Email: {comment.email}</Text>
            <Text>comment: {comment.name}</Text>
          </Box>
        );
      })}
    </>
  );
};

export default Comments;

//getStaticPaths used for  pre-rendering pages that use dynamic routes
export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "3" } },
      {
        params: { postId: "2" },
        // with i18n configured the locale for the path can be returned as well
      },
    ],
    fallback: false,
    // there is also fallback:true which is simlar to fallback:blocking , but
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
    `https://jsonplaceholder.typicode.com/posts/${context.params.postId}/comments`
  );
  const comments = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      comments,
    },
  };
}
