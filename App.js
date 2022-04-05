import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 80vw;
`;
export default function Interview() {
  return (
    <>
      <h2>Welcome to your first simple interview</h2>
      <h3>Tell me about yourself</h3>
      <p>
        my background is software developer and in future frontend programmer
        and system analyst{" "}
      </p>
      <h3>What language is your favorite ? </h3>
      <p>my language favorite is javascript and python</p>
      <h3>List your soft skills</h3>
      <p>resilience, easy adaptation, sometimes proative</p>
      <Img src="https://cdn-blog.novoresume.com/articles/soft-skills/soft-skills.png" />
    </>
  );
}
