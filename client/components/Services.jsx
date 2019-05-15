import React, { useState } from "react";

import ServiceDescription from "./ServiceDescription";

export function Services() {
  const [showModal, hideModal] = useState(false);
  let miao = ["test", "test", "test"];
  return (
    <div className="services-container has-text-centered">
      <h2 className="sub-header">Services</h2>
      <div className="columns is-desktop">
        {miao.map((service, i) => {
          return (
            <div
              key={i}
              className="column"
              onClick={() => hideModal(!showModal)}
            >
              <ServiceDescription service={service} isShowing={showModal} />
              <figure className="is-inline-block service-img">
                <img className="img-services-circular" src="/images/lawn.jpg" />
                <h3 className="img-text">
                  <span>{service}</span>
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
