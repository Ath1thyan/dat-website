import React, { useEffect, useRef } from "react";
import WhoWeAre from "./components/WhoWeAre";
import HowWeInnovate from "./components/HowWeInnovate";
import OurApproach from "./components/OurApproach";
import OurValues from "./components/OurValues";
import OurPolicies from "./components/OurPolicies";
import TheFounder from "./components/TheFounder";
import DctGuild from "./components/DctGuild";
import Footer from "./components/Footer";
// import "./assets/styles.css";
import Home from "./components/Home";

const App = () => {
  const GroupRef = useRef([]);

  const onScroll = (eL) => {
    const styles = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();

        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app-container main">
      <section ref={(el) => (GroupRef.current[0] = el)} data-bgcolor="">
        <Home />
      </section>
      <section ref={(el) => (GroupRef.current[1] = el)} data-bgcolor="#9333ea" id="who-we-are">
        <WhoWeAre />
      </section>
      <section data-bgcolor="#ffffff" ref={(el) => (GroupRef.current[2] = el)}>
        <HowWeInnovate />
      </section>
      <section data-bgcolor="#facc15" ref={(el) => (GroupRef.current[3] = el)} id="our-values">
        <OurApproach />
      </section>
      <section id="our-policies">
        <OurPolicies />
      </section>
      <section ref={(el) => (GroupRef.current[4] = el)} data-bgcolor="#533d7a">
        <TheFounder />
      </section>
      <section ref={(el) => (GroupRef.current[5] = el)} data-bgcolor="#F5F5F5" id="dct-guild">
        <DctGuild />
      </section>
      <Footer />
    </div>
  );
};

export default App;
