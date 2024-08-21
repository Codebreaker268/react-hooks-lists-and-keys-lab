import React from "react";
import ProjectItem from "./ProjectItem";
// import user from "../data/user";

function ProjectList({ projects }) {
  console.log(projects);
  const ProjectItems=projects.map(function(item){
    return <div key={item.id}>
    <h3>{item.name}</h3>
    <p>{item.about}</p>
    </div>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ProjectItems}</div>
      <ProjectItem technologies={projects.map(function(projo){ return projo.technologies})}/>
    </div>
  );
}

export default ProjectList;
