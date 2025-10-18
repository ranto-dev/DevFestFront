"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section style={itemContainer}>
      <div ref={ref} className="w-[50vw]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptas recusandae alias ex? Ad repudiandae quo cupiditate tenetur
          provident fugit sint! Dicta ullam dolorum, tenetur minus quisquam vero
          animi optio!
        </p>
        <figure style={progressIconContainer}>
          <svg
            style={progressIcon}
            width="75"
            height="75"
            viewBox="0 0 100 100"
          >
            <circle
              style={progressIconBg}
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="bg"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              style={{
                ...progressIconIndicator,
                pathLength: scrollYProgress,
              }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
}

const About = () => {
  return (
    <>
      <Item />
      <Item />
      <Item />
    </>
  );
};

const itemContainer = {
  height: "100vh",
  maxHeight: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const progressIconContainer = {
  position: "sticky",
  top: 0,
  width: 80,
  height: 80,
  margin: 0,
  padding: 0,
};

const processCircle = {
  strokeDashoffset: 0,
  strokeWidth: 5,
  fill: "none",
};

const progressIcon = {
  ...processCircle,
  transform: "translateX(-100px) rotate(-90deg)",
  stroke: "#ff0088",
};

const progressIconIndicator = {
  ...processCircle,
  strokeDashoffset: 0,
  strokeWidth: 5,
  fill: "none",
};

const progressIconBg = {
  opacity: 0.2,
};

export default About;
