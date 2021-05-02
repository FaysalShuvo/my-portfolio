import React, { useEffect, useState } from "react";
import { css } from "@emotion/core";
import ClockLoader from "react-spinners/ClockLoader";

const AboutMe = () => {
  const [loading, setLoading] = useState();

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

export default AboutMe;
