import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="columns content has-text-centered">
          <div className="column">
            <a
              href="mailto:richard.grant@xtra.co.nz"
              className="button is-large is-rounded"
            >
              Email us for a quote
            </a>
          </div>
          <div className="column footer-phone">
            <i className="fas fa-phone" /> 027 204 5462
          </div>
        </div>
        <div>
          <p className="has-text-centered footer-note">
            <i className="far fa-copyright" />
            &nbsp;Copyright Richard Grant Lawns & Gardens 2019
          </p>
        </div>
      </footer>
    </div>
  );
};
