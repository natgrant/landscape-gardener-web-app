import React from "react";

import useFetch from "../helpers/useFetch";

export default function Projects() {
  const data = useFetch("/api/v1/gardens");
  return (
    <div className="projects-container has-text-centered">
      <h2 className="sub-header">Projects</h2>
      {data.map((project, i) => {
        if (project.id % 2 !== 0) {
          return (
            <div className="columns" key={i}>
              <div
                id={`project-${project.id}`}
                className="column is-6 project-col"
              >
                <figure className="service-img">
                  <img className="img-projects" src={project.image} />
                </figure>
              </div>
              <div className="column is-6">
                <h3>{project.name}</h3>
                <p>{project.location}</p>
                <p>{project.description}</p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="columns" key={i}>
              <div className="column is-6">
                <h3>{project.name}</h3>
                <p>{project.location}</p>
                <p>{project.description}</p>
              </div>
              <div
                id={`project-${project.id}`}
                className="column is-6 project-col"
              >
                <figure className="service-img">
                  <img className="img-projects" src={project.image} />
                </figure>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
