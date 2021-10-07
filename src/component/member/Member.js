import React from "react";
import style from "./Member.module.css";

const Member = () => {
  return (
    <div className="container">
      <div className={style.members}>
        <div className={style.services}>
          <h1>
            Our <span id={style.blue}>Members</span>
          </h1>
          <p>What our gym member says</p>
        </div>

        <div className={style.card} />

        <img src="images/gym.jpg" alt="info" />
        <p>
          From Peshawar,doing gym is good for healthy life. it helps our body to
          fit.
        </p>
        <h2>Muhammad Suhaib Afridi, Gym Client</h2>

        <img src="images/icon.png" alt="info" />
      </div>
    </div>
  );
};
export default Member;
