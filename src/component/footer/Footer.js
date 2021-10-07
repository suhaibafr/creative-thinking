import React from "react";
import style from "./Footer.module.css"

const Footer=()=>{
    return(
		<div className="container">
<div className={style.footer}>
	<h1> <span id={style.orange}>SUH</span><span id={style.blue}>AIB</span></h1>
	
	<p>&copy; 2020 SUHIAB, Peshawar, Pakistan </p>
	<img src="images/icon.png" alt="footer_img"/>

</div>
</div>
    )
}
export default Footer;