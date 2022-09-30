import React from "react";
import SideBarMenu from "./SideBarMenu";
import LastActivity from "./LastActivity";
import UserInfo from "./UserInfo";
import ProductCard from "../cards/ProductCard";
import office365 from "../../images/office365.jpg";
import surveyMonkey from "../../images/surveyMonkey.jpg";
import learningCenter from "../../images/learningCenter.jpg";
import SocialMedia from "./SocialMedia";

const Panel = () => {
  return (
    <div>
      <SideBarMenu />
      <div className="panel">
        <div className="myAccountPanel">
          <UserInfo />
          <div className="userActivity">
            <div className="productContainer">
              <ProductCard image={office365}></ProductCard>
              <ProductCard image={surveyMonkey}></ProductCard>
              <ProductCard image={learningCenter}></ProductCard>
              <ProductCard image={office365}></ProductCard>
            </div>

            <LastActivity />
            <SocialMedia/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
