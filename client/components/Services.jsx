import React, { useState } from "react";

import useFetch from "../helpers/useFetch";
import ServiceDescription from "./ServiceDescription";

export function Services(props) {
  const [showModal, hideModal] = useState(false);
  const data = useFetch("/api/v1/services");

  function handleClick() {
    return hideModal(!showModal);
  }

  return (
    <div className="services-container has-text-centered">
      <h2 className="sub-header">Services</h2>
      <div className="columns is-desktop">
        {data.map((el, i) => {
          return (
            <div key={i} className="column" onClick={handleClick}>
              <ServiceDescription service={el.title} isShowing={showModal} />
              <figure className="is-inline-block service-img">
                <img className="img-services-circular" src="/images/lawn.jpg" />
                <h3 className="img-text">
                  <span>{el.title}</span>
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
