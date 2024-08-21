import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  const tech=technologies.map(function(thing){
    return <span>{thing}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <p>{tech}</p>
        
        
      </div>
    </div>
  );
}

export default ProjectItem;
