import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Hero = ({children}) => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#cta", {
      y: -50,
      opacity: 1,
      delay: 2,
    });
  }, []);

  return (
    <section className="w-full nav-height relative">
      { children }
    </section>
  );
};

export default Hero;
