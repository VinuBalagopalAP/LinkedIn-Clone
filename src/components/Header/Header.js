import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* Icon */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="linkedin icon"
        />

        <div className="header__search">
          <SearchIcon />

          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQGRgjuiOV5bNw/profile-displayphoto-shrink_800_800/0/1631521979964?e=1644451200&v=beta&t=FlvpHvMU3Vl0h9va83ul4qpzWh5AQeXdeAiwhgKtumA"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
