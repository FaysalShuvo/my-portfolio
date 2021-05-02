import React from "react";
import Project from "../Project/Project";
import projectsData from "../ProjectsData";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="project-body">
      <h1 className="d-flex justify-content-center">PROJECTS</h1>

      <div className="row ml-5 ">
        {projectsData.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
