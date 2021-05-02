import React, { useEffect, useState } from "react";
import "./Blogs.css";
import { css } from "@emotion/core";
import ClockLoader from "react-spinners/ClockLoader";

const Blogs = () => {
  let [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
  }, []);
  const override = css`
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div className="blog-body d-flex justify-content-center align-items-center">
      <ClockLoader
        color={"white"}
        loading={loading}
        css={override}
        size={100}
      />
    </div>
  );
};

export default Blogs;
