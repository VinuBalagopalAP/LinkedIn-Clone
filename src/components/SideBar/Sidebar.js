import { Avatar } from "@mui/material";
import React from "react";
import "./SideBar.css";

function Sidebar() {
  const recentItems = (topic) => (
    <div className="sidebar__recentItems">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5616AQHkAMHGRCG--g/profile-displaybackgroundimage-shrink_200_800/0/1617554872964?e=1644451200&v=beta&t=Rbo6h3nHfSIeI8UHLRLZQP-_8pfffI_2tRV8ro_TWew"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Vinu Balagopal A P</h2>
        <h4>vinubalagopalap@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("softwareengineering")}
        {recentItems("design")}
        {recentItems("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
