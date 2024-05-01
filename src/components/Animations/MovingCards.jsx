import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import { avatar } from "../../assets/HeroPageAssets";

export const MovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef();
  const scrollerRef = React.useRef();

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "40s");
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl  overflow-hidden  ",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className="w-[250px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}>
            <blockquote>
              <img src={avatar} />
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
              <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

{
  /* <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
  <div className="flex justify-between">
    <div className="flex gap-4">
      <img src={avatar} />
      <div>
        <h1>Jenny Wilson</h1>
        <p>UI-UX Designer</p>
      </div>
    </div>
    {/* <img className="h-8" src={quotationMark} /> */
}
//   </div>

//   <div className="py-8">
//     <h3 className="text-lg">
//       Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam
//       sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla
//       massa, hendrerit vestibulum gravida in, feugiat auctor felis.Ut pharetra
//       ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet
//       turpis. In hac habitasse platea dictumst.
//     </h3>
//   </div>
// </div>; */}
