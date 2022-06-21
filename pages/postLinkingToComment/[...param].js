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
