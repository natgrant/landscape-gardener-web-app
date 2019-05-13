import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Header = () => {
  return (
    <Fragment>
      <figure className="effect-header">
        <AliceCarousel
          mouseDragEnabled
          buttonsDisabled
          autoPlayInterval={3000}
          autoPlay={true}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          dotsDisabled={true}
        >
          <img src="/images/filler3.jpg" />
          <img src="/images/filler4.jpg" />
          <img src="/images/filler5.jpg" />
        </AliceCarousel>
        <figcaption>
          <h2 className="text-header">
            Garden Maintenance & Design
            <div>
              <Link
                to="/contact"
                className="button is-rounded is-large"
                id="link-header"
              >
                Get in touch
              </Link>
            </div>
          </h2>
        </figcaption>
      </figure>
    </Fragment>
  );
};
