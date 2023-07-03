import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection, Aboutus,Title,Doctors, Subscribe } from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Aboutus/>
      <Title
      heading="Our Doctors"
      paragraph="Meet our top Professional doctors"
      />
      <Doctors/>
      <Subscribe/>
    </div>
  );
};

export default Home;