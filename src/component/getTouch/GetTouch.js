import React from "react";
import style from "./GetTouch.module.css";

const GetTouch = () => {
  return (
    <div className="container">
      <div className={style.contact}>
        <div className={style.services_info}>
          <h1>
            Get in<span id={style.blue}>Touch</span>
          </h1>
          <p> We are Available</p>
        </div>

        <div className={style.contact_row}>
          <div className={style.contact_left}>
            <div className={style.form}>
              <input type="text" name="" placeholder="E-mail" />
              <input type="text" name="" placeholder="Subject" />
              <br />
              <textarea rows="10" cols="40" placeholder="Message"></textarea>
              <br /> <button className={style.c_btn}>Send</button>
            </div>
          </div>
          <div className={style.contact_right}>
            <h1> E-mail</h1> <p>suhaibafridi45@gmail.com</p>
            <br />
            <h1> Mobile</h1>
            <p>03178501847, 03359048654</p>
            <br />
            <h1> Address</h1>
            <p>
              {" "}
              Lalazar Colony
              <br />
              Afridi Street University Campus peshawar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetTouch;
