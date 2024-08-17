import React from "react";
import Image2 from "../assets/image3.jpg";
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
      className=" bg-purple-600 text-yellow-400 flex flex-col md:flex-row px-10 md:px-40 py-10 md:py-20 gap-8 md:gap-16"
      // data-bgcolor="#9333ea"
    >
      <div className="flex flex-col gap-8">
        <p className="font-bold text-3xl md:text-5xl">Who We Are</p>
        <div className="flex flex-col gap-4 text-yellow-500">
          <p>
            DCT is an independent and multi-disciplined agency based in Qatar.
          </p>
          <p>We believe when we stretch boundaries, we can catalyze change.</p>
          <p>
            We are committed and motivated by the pillars of Qatar National
            Vision 2030.
          </p>
        </div>
        <div className="flex flex-col uppercase gap-2 font-semibold">
          <p>We let our curiosity lead the way</p>
          <p>we provide unique perspectives</p>
          <p>we thick bold</p>
        </div>
      </div>
      <motion.div
        variants={FadeUp(0.6)}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={Image2}
          alt="Who We Are"
          className="w-full h-auto rounded-md"
        />
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
