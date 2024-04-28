import React, { useContext } from "react";
import {
  Achievement,
  CTA,
  Categories,
  Companies,
  Courses,
  Feedback,
  Footer,
  Hero,
  Navbar,
} from "../../components/HeroPageComponents";
import "./home.css";

const HeroPage = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />
    </>
  );
};

export default HeroPage;
