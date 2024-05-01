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
import "./home.scss";
import PromotionDetails from "../../components/HeroPageComponents/PromotionDetails";

const HeroPage = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Courses />
      <Achievement />

      <PromotionDetails />
      <Categories />
      <Feedback />
    </>
  );
};

export default HeroPage;
