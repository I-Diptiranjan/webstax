"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Image } from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";
import { HeroHeading } from "./HeroHeading";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] overflow-hidden  antialiased relative flex flex-col self-auto  [transform-style:preserve-3d] mb-20 ">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 ">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const words = [
    {
      text: "START",
    },
    {
      text: "TO",
    },

    {
      text: "SUCCESS.",
      className: "text-red-600 dark:text-red-600",
    },
  ];

  return (
    <div className=" z-10 max-w-3xl">
      <div className="max-w-7xl relative mx-auto py-20 md:py-20  px-4 w-full  left-0 top-0 ">
        <HeroHeading words={words} />
        <p className="max-w-2xl text-base md:text-xl mt-4 dark:text-neutral-200">
          We build beautiful products with the latest technologies and
          frameworks. We are a team of passionate developers and designers that
          love to build amazing products.
        </p>
        <form className="bg-white max-w-[500px] h-14 rounded-xl mt-12 md:mt-12 input-box-shadow  flex justify-between  border-solid border-4 border-red-500 z-10 relative ">
          <input
            className="bg-white dark:text-black rounded-md border-none outline-none p-2 text-xl w-[450px] "
            type="text"
            placeholder="What do want to learn?"
          />
          <button className="bg-red-500 hover:bg-red-600 rounded-md w-20 flex justify-center items-center">
            <AiOutlineSearch
              size={20}
              className="icon"
              style={{ color: "#000" }}
            />
          </button>
        </form>
      </div>
      {/* <Lottie
        animationData={heropage}
        className="md:order-last  order-last  h-[60vh]  bg-transparent"
      /> */}
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 z-0">
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-left-top  h-full w-full inset-0"
        alt={product.title}
      />

      <div className="absolute inset-0 h-full w-full opacity-0  bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
