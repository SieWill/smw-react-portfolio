import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import contactPagePicture from "../../../static/assets/images/auth/contact.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">sierra.williams011@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="link" />
            </div>

            <div className="text">
              <a href="https://www.linkedin.com/in/sierraw93/" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Northern Virginia</div>
          </div>
        </div>
      </div>
    </div>
  );
}
