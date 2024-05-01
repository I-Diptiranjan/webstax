import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = 5;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      1
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["var(--black)"];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--red-500), var(--red-500))",
    "linear-gradient(to bottom right, var(--red-500), var(--red-500))",
    "linear-gradient(to bottom right, var(--red-500), var(--red-500))",
  ];
  return (
    <motion.div
      //   animate={{
      //     backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      //   }}
      className="h-[30rem] overflow-y-auto flex justify-center relative gap-[300px] py-4 pb-8 rounded-md no-scrollbar bg-white  dark:bg-black"
      ref={ref}>
      <div className="div relative flex items-start pl-6 py-4 ">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-4">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-black dark:text-white">
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.6,
                }}
                className="text-kg text-black dark:text-white max-w-sm mt-6">
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-60 w-96 rounded-md bg-white sticky top-20 overflow-hidden",
          contentClassName
        )}>
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
