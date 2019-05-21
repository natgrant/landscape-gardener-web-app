import React, { useState } from "react";

import useFetch from "../helpers/useFetch";

export function Services() {
  const data = useFetch("/api/v1/services");

  return (
    <div className="services-container has-text-centered">
      <h2 className="sub-header">Services</h2>
      <div className="columns is-desktop">
        {data.map((service, i) => {
          return (
            <div key={i} className="column">
              <figure className="is-inline-block service-img">
                <img className="img-services-circular" src="/images/lawn.jpg" />
                <h3 className="img-text">
                  <span>{service.title}</span>
                </h3>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
