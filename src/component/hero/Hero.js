import React from "react";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="container">
      <div className={style.main}>
        <div className={style.left}>
          <img src="images/banner.png" alt="hero_image" />
        </div>
        <div className={style.right}>
          <p>I am a</p>
          <h1> Gym Trainer</h1>
          <p>
            From Peshawar,doing gym is good for healthy life. it helps our body
            to fit. it release stress from our mind.
          </p>
          <button className={style.btn} type="submit">
            Join us
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
