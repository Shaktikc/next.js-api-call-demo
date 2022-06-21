import React from "react";
import { useRouter } from "next/router";

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
