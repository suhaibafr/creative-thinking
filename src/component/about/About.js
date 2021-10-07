import React from "react";
import style from "./About.module.css"

const About=()=>{
    return(
        <div className="container">
        <div className={style.about}>
        <div className={style.about_row}>
            <div className={style.about_left}>
                <h1> About <span id={style.blue}>Me</span></h1>
                <p id="p-title">I am a Gym Trainer</p>
                <p>
                    From Peshawar,doing gym is good for healthy life. it helps our body to fit. it release stress from our mind.From Rajasthan,doing gym is good for healthy life. it helps our body to fit. it release stress from our mind.
    
                </p>
                <p>
                    From Pesahwar,doing gym is good for healthy life.
                </p>
                <button className={style.c_btn}>Read more</button>
            </div>
            <div className={style.about_right}>
                <img src="images/img1.jpg" alt="About_img"/>
            </div>
        </div>
    </div>
    </div>
    )
}
export default About;