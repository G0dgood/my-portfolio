import React from "react";
import { faBriefcase, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../common/card";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
          <div className="works-body">
            <div className="work">
              <FontAwesomeIcon icon={faBuilding} className="work-image" />
              <div className="work-title">Outcess Solution</div>
              <div className="work-subtitle">Software Engineer</div>
              <div className="work-duration">2019 - Present</div>
            </div>

            <div className="work">
              <FontAwesomeIcon icon={faBuilding} className="work-image" />
              <div className="work-title">Arkland Properties - Contract</div>
              <div className="work-subtitle">
                Front-End Web and Mobile Developer
              </div>
              <div className="work-duration">2022 - 2023</div>
            </div>
            <div className="work">
              <FontAwesomeIcon icon={faBuilding} className="work-image" />
              <div className="work-title">Iverify.ng - Contract</div>
              <div className="work-subtitle">Mobile Engineer</div>
              <div className="work-duration">2021 - 2022</div>
            </div>
            <div className="work">
              <FontAwesomeIcon icon={faBuilding} className="work-image" />
              <div className="work-title">
                Simplebooks (Simplebks) - Contract
              </div>
              <div className="work-subtitle">Mobile Engineer</div>
              <div className="work-duration">Apr 2021 - Sep 2021 · 6m</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;
