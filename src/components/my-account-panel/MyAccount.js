import React from "react";
import Favorites from './Favorites';
import LastSeen from './LastSeen';
import SideBar from "./SideBar";

const MyAccount = () => {
    return (
        <div className="myAccountPanel">
            <SideBar></SideBar>
            <div className="userActivity">
                <Favorites></Favorites>
                <LastSeen></LastSeen>
            </div>
       </div>
           


    )
}

export default MyAccount;