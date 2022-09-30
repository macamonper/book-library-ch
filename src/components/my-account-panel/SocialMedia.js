import React from "react";
import { Icon } from "@iconify/react";

const SocialMedia = () => {
  return (
    <div className="lastActivityCard">
      <div className="socialMediaContainer">
   
        <div className="socialMediaCard">
          <div>
            <Icon
              icon="ant-design:twitter-circle-filled"
              color="#1da1f2"
              width="50"
              height="50"
            />

            <p className="companyName">Twitter</p>
          </div>

          <div className="commentContainer">
            <p>
              Do id mollit ea ipsum dolor ad nostrud duis elit pariatur sint
              esse eiusmod qui eiusmod culpa ...
            </p>
            <p>
              Do id mollit ea ipsum dolor ad nostrud duis elit pariatur sint
              esse eiusmod qui eiusmod culpa nostrud duis dabipus elit...
            </p>
            <div className="interactionContainer">
              <div>
                <Icon
                  icon="fa-regular:comment"
                  color="#a2a2a7"
                  width="15"
                  height="15"
                />
                <p>3492</p>
              </div>
              <div>
                <Icon
                  icon="akar-icons:clock"
                  color="#a2a2a7"
                  width="15"
                  height="15"
                />
                <p>9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="socialMediaCard">
          <div>
            <div className="circle">
              <Icon
                icon="fluent:news-24-regular"
                color="white"
                width="35"
                height="35"
                rotate={2}
                vFlip={true}
              />
            </div>

            <p className="companyName">BBC News</p>
          </div>

          <div className="commentContainer">
            <p>
              Do id mollit ea ipsum dolor ad nostrud duis elit pariatur sint
              esse eiusmod qui eiusmod culpa ...
            </p>
            <p>
              Do id mollit ea ipsum dolor ad nostrud duis elit pariatur sint
              esse eiusmod qui eiusmod culpa nostrud duis dabipus elit...
            </p>
            <div className="interactionContainer">
              <div>
                <Icon
                  icon="fa-regular:comment"
                  color="#a2a2a7"
                  width="15"
                  height="15"
                />
                <p>3492</p>
              </div>
              <div>
                <Icon
                  icon="akar-icons:clock"
                  color="#a2a2a7"
                  width="15"
                  height="15"
                />
                <p>9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
