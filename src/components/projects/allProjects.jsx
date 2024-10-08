import React from "react";
import Project from "./project";
import INFO from "../../data/user";

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      {INFO.projects.map((project, index) => (
        <div className="all-projects-project" key={index}>
          <Project
            svg={project.svg}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
