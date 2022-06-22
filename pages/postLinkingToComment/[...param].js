import React from "react";
import { useRouter } from "next/router";

// by adding three dot on the file name with brackets eg: [...param].js , which can be used to catch
// any route with in that page
const Comments = ({ comments }) => {
  const router = useRouter();
  const param = router.query.param || [];
  console.log("param", router);
  return (
    <div>
      {comments.map((comment) => {
        return <h1 key={comment.id}>param: {comment.email}</h1>;
      })}
    </div>
  );
};

export default Comments;

//getStaticPaths used for  pre-rendering pages that use dynamic routes
export async function getStaticPaths() {
  return {
    paths: [{ params: { param: ["2", "comments"] } }],
    fallback: "blocking",
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
    `https://jsonplaceholder.typicode.com/posts/${context.params.param[0]}/comments`
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
