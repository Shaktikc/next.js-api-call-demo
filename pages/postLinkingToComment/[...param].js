import React from "react";
import { useRouter } from "next/router";

// by adding three dot on the file name with brackets eg: [...param].js , which can be used to catch
// any route with in that page
const Comments = () => {
  const router = useRouter();
  const param = router.query.param || [];
  return (
    <div>
      {" "}
      <h1>param: {param.join("/")}</h1>
    </div>
  );
};

export default Comments;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const { data: res } = await axios.get(
    `https://api.theyetitech.com/api/about/`
  );
  console.log("res", res);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      res,
    },
  };
}
