import React from "react";
import Image2 from "../assets/image3.jpg";
import { motion } from "framer-motion";

const OurApproach = () => {
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
          duration: 0.3,
          delay: delay,
          ease: "easeInOut",
        },
      },
    };
  };
  return (
    <section
      className=" px-10 md:px-48 py-10 md:py-20"
      // data-bgcolor="#facc15"
    >
      <p className="font-bold text-3xl md:text-5xl">Our Approach</p>
      <div className="mt-20 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <p className="text-sm text-purple-950 font-semibold">FIRST STEPS</p>
          <br />
          <p className="font-bold text-2xl">We start with "Yes, We Can"</p>
          <br />
          <p className="text-gray-600">
            We only work with passionate trailblazers and non- conventionalists.
          </p>
          <p className="text-gray-600">We Think Bold.</p>
        </div>
        <div className="md:w-1/3">
          <p className="text-sm text-purple-950 font-semibold">IN DEEP</p>
          <br />
          <p className="font-bold text-2xl">We Explore and Penetrate</p>
          <br />
          <p className="text-gray-600">
            We identify, connect and engage with enthusiasm to stretch, rethink
            and reinvigorate ideas to achieve uniqueness.
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="text-sm text-purple-950 font-semibold">STRATEGIC</p>
          <br />
          <p className="font-bold text-2xl">We believe in the "Just Ask"</p>
          <br />
          <p className="text-gray-600">
            By listening to our clients, we conceptualise and deliver unmatched
            experiential outcomes.
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-black mt-20"></div>
      <div className="flex flex-col md:flex-row mt-20 gap-8">
        <div className="flex flex-1 flex-col gap-12">
          <p className="font-bold text-3xl md:text-5xl">Our Values</p>
          <motion.img
            variants={FadeUp(0.6)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true, amount: 0.5 }}
            src={Image2}
            alt=""
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="flex flex-1 flex-col gap-12">
          <div className="flex flex-1 flex-col gap-4">
            <p className="font-semibold text-xl">Thick Bold</p>
            <p>
              This value is inherent within all our Values -trust each other and
              encourage each other to push beyond boundaries. Be willing to
              extend yourself and you can make a difference.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="font-semibold text-xl">Thick Forward</p>
            <p>
              Empower creations that identify, shape and actualise aspirations.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="font-semibold text-xl">Thick Enthusiastic</p>
            <p>
              Nothing great was ever achieved without enthusiasm - enthusiasm is
              a choice and enthusiasm makes the impossible become possible.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="font-semibold text-xl">Thick Prudent</p>
            <p>
              Use sound judgrnent and think ot ways we can innovate and do
              things better.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="font-semibold text-xl">Thick Excellence</p>
            <p>Our Values embody the excellence of everything we do.</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-12">
          <div className="flex flex-1 flex-col gap-4">
            <p className="font-semibold text-xl">Thick Original</p>
            <p>Use sound judgment, think innovation and excel.</p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="font-semibold text-xl">Thick Empowered</p>
            <p>
              Discuss, consult, seek views and not permission. Use your drive
              and author your own development.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="font-semibold text-xl">Thick Meritocratic</p>
            <p>
              Express your ideas, each idea is respected, every idea has
              potential to create success.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="font-semibold text-xl">Thick Integrity</p>
            <p>Be honest, ethical, and trustworthy. Do the right thing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
