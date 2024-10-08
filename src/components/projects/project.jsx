import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import next from "../../Asset/Img/next.png";

const Project = (props) => {
  const { svg, title, description, linkText, link } = props;

  return (
    <React.Fragment>
      <div className="project">
        <Link to={link}>
          <div className="project-container">
            <div className="project-logo">
              {svg === "" ? (
                <img src={next} alt="logo" />
              ) : (
                <FontAwesomeIcon icon={svg} size="2x" />
              )}
            </div>
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
            <div className="project-link">
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faLink} />
              </div>

              <div className="project-link-text">{linkText}</div>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Project;
