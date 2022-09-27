import React from "react";
import Favorites, { Relevance } from './Relevance';
import LastSeen from './LastSeen';
import SideBar from "./SideBar";

const MyAccount = () => {
    return (
      <div className="background">
        <div className="myAccountPanel">
          <SideBar></SideBar>
          <div className="userActivity">
            <Relevance></Relevance>
            <LastSeen></LastSeen>
            <LastSeen></LastSeen>
          </div>
        </div>
      </div>
    );
}

export default MyAccount;