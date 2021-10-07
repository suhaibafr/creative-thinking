import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className="container">
      <div className={style.header}>
        <div className={style.headercontent}>
          <div className={style.logo}>
            <span id={style.blue}>SUH</span>
            <span id={style.orange}>AIB</span>
          </div>
          <div className={style.navBbar}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Client</li>
              <li>Our Work</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={style.icon}>
            <img src="images/icon.png" alt="icon_image" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
