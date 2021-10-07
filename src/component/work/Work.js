import React from "react";
import style from "./Work.module.css";

const Work = () => {
  return (
    <div className="container">
      <div className={style.work}>
        <div className={style.services_info}>
          <h1>
            Our <span id={style.blue}>Works</span>
          </h1>
          <p>What we Provide</p>
        </div>
        <div className={style.services_row}>
          <div className={style.work_box}>
            <img src="images/ex1.jpg" alt="work_img" />
          </div>
          <div className={style.work_box}>
            <img src="images/ex2.jpg" alt="work_img" />
          </div>
          <div className={style.work_box}>
            <img src="images/ex3.jpg" alt="work_img" />
          </div>
          <div className={style.work_box}>
            <img src="images/ex4.jpg" alt="worl_img" />
          </div>
          <div className={style.work_box}>
            <img src="images/ex5.jpg" alt="work_img" />
          </div>
          <div className={style.work_box}>
            <img src="images/ex6.jpg" alt="work_img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
