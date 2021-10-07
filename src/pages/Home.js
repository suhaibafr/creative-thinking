import React from "react";
import About from "../component/about/About";
import Footer from "../component/footer/Footer";
import GetTouch from "../component/getTouch/GetTouch";
import Header from "../component/header/Header";
import Hero from "../component/hero/Hero";
import Member from "../component/member/Member";
import Services from "../component/Service/Services";
import Signup from "../component/signup/Signup";
import Work from "../component/work/Work";

const Home=()=>{
    return(
        <>
 <Header/>
 <Hero/>
 <About/>
 <Signup/>
 <Services/>
 <Member/>
 <Work/>
 <GetTouch/>
 <Footer/>
 </>
    )
}
export default Home;