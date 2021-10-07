import React from "react";
import style from "./Services.module.css";

const Services = () => {
  return (
    <div className="container">
      <div className={style.services}>
        <div className={style.services_info}>
          <h1>
            Our <span id={style.blue}>Services</span>
          </h1>
          <p>What we Provide</p>
        </div>
        <div className={style.services_row}>
          <div className={style.services_box}>
            <img src="images/download.jpg" alt="body_pic" />
            <h2>Gym</h2>
            <p> From Peshawar,doing Gym is good for healthy life. </p>
          </div>

          <div className={style.services_box}>
            <img src="images/download.jpg" alt="body_pic" />
            <h2>Cardio</h2>
            <p> From Peshawar,doing Cardio is good for healthy life. </p>
          </div>

          <div className={style.services_box}>
            <img src="images/download.jpg" alt="body_pic" />
            <h2>Weight Gain</h2>
            <p> From Peshawar,doing gym is good for healthy life. </p>
          </div>

          <div className={style.services_box}>
            <img src="images/download.jpg" alt="body_pic" />
            <h2>Weight Loss</h2>
            <p> From Peshawar,doing gym is good for healthy life. </p>
          </div>

          <div className={style.services_box}>
            <img src="images/download.jpg" alt="body_pic" />
            <h2>Strength</h2>
            <p> From Pesahwar,doing gym is good for healthy life. </p>
          </div>

          <div className={style.services_box}>
            <img src="images/download.jpg" alt="body_pic" />
            <h2>CrossFit</h2>
            <p> From Pesahwar,doing gym is good for healthy life. </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
