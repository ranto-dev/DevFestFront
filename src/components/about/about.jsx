"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function Item({ text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section
      style={itemContainer}
      className="border rounded-r-[6rem] w-[75%] m-auto flex justify-center items-center"
    >
      <div ref={ref} className="w-[50vw]">
        <p>{text}</p>
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
      <div className="scroll-revealed text-center mx-auto mb-20">
        <motion.h6
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="mb-2 block text-lg font-semibold text-primary"
        >
          A propos
        </motion.h6>
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          className="mb-6 text-6xl"
        >
          Mais c'est quoi Kalykil?
        </motion.h2>
      </div>
      <div className="flex flex-col gap-4">
        <Item
          text={"Une Application qui vous aidera à prendre la décision du jour"}
        />
        <Item
          text={"En fonction de votre budget et des produits de votre région"}
        />
        <Item text={"Tout en vous aidant à garder un équilibre alimentaire"} />
      </div>
    </>
  );
};

const itemContainer = {
  height: "40vh",
  maxHeight: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const progressIconContainer = {
  position: "sticky",
  top: "-1rem",
  width: 80,
  height: 80,
  margin: 0,
  padding: 0,
};

const processCircle = {
  strokeDashoffset: 0,
  strokeWidth: 5,
  position: "absolute",
  top: "-5rem",
  fill: "none",
};

const progressIcon = {
  ...processCircle,
  transform: "translateX(-100px) rotate(-90deg)",
  stroke: "#ff4da6",
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
