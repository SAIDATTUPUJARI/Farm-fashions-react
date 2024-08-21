import React, { Fragment } from "react";
import "./Slide.css"; 
import Navbar1 from "../Navbar";
import Secondhome from "../secondhome/Secondhome";
import Thirdhome from "../thirdhome/Thirdhome"
import Fourthome from "../fourthome/Fourthome";
import Slideshow from "./Slideshow"
import ImageSlider from "./ImageSlider";
import GoToTopButton from "./GoToTopButton";
import Footer from "../footer/Footer";
import Footer2 from "../footer/Footer2"

const Home = () => {
  return (
    <Fragment>
      <Navbar1 />
      <ImageSlider />
      <Secondhome />
      <Thirdhome />
      <Fourthome />
      <Slideshow />
      <GoToTopButton />
      <Footer />
      <Footer2 />
    </Fragment>
  );
};
export default Home;
