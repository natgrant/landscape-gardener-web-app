import React, { Fragment } from "react";

const ServiceDescription = ({ isShowing, handleChange, service }) => {
  if (isShowing) {
    return (
      <Fragment>
        <div className="modal-container">
          <div className="modal is-active">
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">{service.title}</p>
              </header>
              <section className="modal-card-body">
                <p>{service.description}</p>
              </section>
              <button
                className="modal-close is-large"
                aria-label="close"
                onClick={handleChange}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return null;
  }
};

export default ServiceDescription;
