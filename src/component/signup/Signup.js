import React from "react";
import style from "./Signup.module.css";

const Signup = () => {
  return (
    <div className="container">
      <div className={style.signup}>
        <div className={style.signup_row}>
          <div className={style.signup_left}>
            <img src="images/img2.png" alt="signup_img" />
          </div>
          <div className={style.signup_right}>
            <h1>
              BEING <span id={style.blue}>BODY</span>
            </h1>
            <h2>BUILDER</h2>
            <button className={style.c_btn}>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
