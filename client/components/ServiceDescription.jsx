import React, { Fragment } from "react";

const ServiceDescription = ({ isShowing, handleChange, service }) => {
  if (isShowing) {
    return (
      <Fragment>
        <div className="modal-container">
          <p className="modal-title">{service.title}</p>

          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={handleChange}
          />
        </div>
      </Fragment>
    );
  } else {
    return null;
  }
};

export default ServiceDescription;
