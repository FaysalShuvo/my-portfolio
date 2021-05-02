import React from "react";
import "./Resume.css";
import SkillBar from "react-skillbars";
import { ExternalLink } from "react-external-link/dist/index.cjs";

const Resume = () => {
  const skills = [
    {
      type: "HTML5",
      level: 90,
    },
    {
      type: "CSS3",
      level: 85,
    },
    {
      type: "BOOTSTRAP",
      level: 90,
    },
    {
      type: "Javascript",
      level: 85,
    },
    {
      type: "React",
      level: 80,
    },
    {
      type: "Node",
      level: 75,
    },
    {
      type: "MongoDB",
      level: 70,
    },
  ];
  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };
  return (
    <div className="resume-body ">
      <h1 style={{ fontWeight: "900" }} className="text-center ">
        SKILLS
      </h1>
      <div className="skills">
        <SkillBar skills={skills} colors={colors} animationDelay={40} />

        <h2>Resume</h2>
        <span style={{ display: "block" }}>
          <ExternalLink href="https://drive.google.com/uc?export=download&id=1IkrA6HyfqGUTlI2iVz9-5uZC0QBpVLpx">
            DOWNLOAD MY RESUME
          </ExternalLink>
        </span>
      </div>
    </div>
  );
};

export default Resume;
