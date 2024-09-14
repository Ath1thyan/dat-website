import React from "react";
import { image3 } from "../assets/index";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  const FadeUp = (delay) => {
    return {
      initial: {
        opacity: 0,
        y: 300,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 20,
          duration: 0.5,
          delay: delay,
          ease: "easeInOut",
        },
      },
    };
  };

  return (
    <section
      id="WhoWeAre"
      className="text-white px-10 md:px-40 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8"
    >
      <div className="flex flex-col gap-8 w-full">
        <p className="font-helvetica-bold text-3xl md:text-5xl">Who We Are</p>
        <div className="flex flex-col gap-4 text-white font-helvetica-light pt-10">
          <p>
            DCT is an independent and multi-disciplined agency based in Qatar.
          </p>
          <p>We believe when we stretch boundaries, we can catalyze change.</p>
          <p>
            We are committed and motivated by the pillars of Qatar National
            Vision 2030.
          </p>
        </div>
        <div className="flex flex-col uppercase gap-2 font-semibold font-helvetica-normal">
          <p>We let our curiosity lead the way</p>
          <p>we provide unique perspectives</p>
          <p>we think bold</p>
        </div>
      </div>
      <motion.div
        variants={FadeUp(0.6)}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true, amount: 0.5 }}
        className="flex justify-center"
      >
        <img
          src={image3}
          alt="Who We Are"
          className="w-full h-auto max-h-[450px] rounded-md object-cover"
        />
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
