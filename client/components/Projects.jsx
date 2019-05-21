import React from "react";

import useFetch from "../helpers/useFetch";

export default function Projects() {
  const data = useFetch("/api/v1/gardens");
  console.log(data);
  return (
    <div className="projects-container has-text-centered">
      <h2 className="sub-header">Projects</h2>
      <div className="columns is-desktop">
        {data.map((project, i) => {
          return (
            <div key={i} className="column">
              <figure className="is-inline-block service-img">
                <img className="img-projects" src={project.image} />
                <h3 className="">{project.name}</h3>
                <p>{project.location}</p>
                <p>{project.description}</p>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}
