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

  const onScroll = () => {
    const styles = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();
        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    if (styles) {
      document.body.style.backgroundColor = styles.group.dataset.bgcolor;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="app-container main">
      <section
        ref={(el) => (GroupRef.current[0] = el)}
        data-bgcolor=""
        className="section responsive-section"
      >
        <Home />
      </section>

      <section
        ref={(el) => (GroupRef.current[1] = el)}
        data-bgcolor="#ff7e00"
        id="who-we-are"
        className="section responsive-section"
      >
        <WhoWeAre />
      </section>

      <section
        data-bgcolor="#ffffff"
        ref={(el) => (GroupRef.current[2] = el)}
        className="section responsive-section"
      >
        <HowWeInnovate />
      </section>

      <section
        data-bgcolor="#cccccc"
        ref={(el) => (GroupRef.current[3] = el)}
        id="our-values"
        className="section responsive-section"
      >
        <OurApproach />
      </section>

      <section
        id="our-policies"
        data-bgcolor=""
        ref={(el) => (GroupRef.current[4] = el)}
        className="section responsive-section"
      >
        <OurPolicies />
      </section>

      <section
        ref={(el) => (GroupRef.current[5] = el)}
        data-bgcolor="#ff7e00"
        className="section responsive-section"
      >
        <TheFounder />
      </section>

      <section
        ref={(el) => (GroupRef.current[6] = el)}
        data-bgcolor="#F5F5F5"
        id="dct-guild"
        className="section responsive-section"
      >
        <DctGuild />
      </section>

      <Footer />
    </div>
  );
};

export default App;
