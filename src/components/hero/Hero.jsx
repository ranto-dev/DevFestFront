import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";


const Hero = () => {
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
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="grid h-screen place-content-center bg-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel
          quia pariatur, quo eum in! Aliquid excepturi, autem quisquam voluptate
          enim voluptatum id unde magnam corrupti eius nihil inventore
          reiciendis!
        </div>

        <div className="md:w-10/12 w-9/12">3d model</div>
      </div>

      <div
        className="flex flex-col items-center opacity-0 translate-y-20"
        id="cta"
      >
        <a href="#highlights" className="btn">
          Commencer maintenant
        </a>
        <p className="font-normal text-xl">Pour vous</p>
      </div>
    </section>
  );
};

export default Hero;
