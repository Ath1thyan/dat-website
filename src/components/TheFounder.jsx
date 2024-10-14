import React from "react";
import "./TheFounder.css";
import { Ouaissa } from "../assets/index";

const TheFounder = () => {
  return (
    <section id="TheFounder" className="main the-founder">
      <h1 className="founder-title">The Founder</h1>
      <div className="founder-content">
        <div className="founder-image">
          <img src={Ouaissa} alt="Founder" />
        </div>
        <div className="founder-details">
          <p className="founder-name">IMANE</p>
          <p className="founder-name">OUAISSA</p>
          <h3 className="founder-designation">CEO</h3>
          <div>
            <p className="founder-description">
              DCT embodies the culmination of a personal journey that is at the
              heart of our mission, our relationships and our approach as an
              agency.
            </p>
            <p className="founder-description">
              The DCT team is driven by entrepreneurs with access to expertise
              and insights across the entire spectrum of building fabulously new
              experiences.
            </p>
            <p className="founder-description">
              DCT is about endurance and being audacious not only in business
              but also in our efforts to contribute ideas and enhance
              experiences rooted in and aligned with Qatar National Vision 2030.
            </p>
            <p className="founder-description">
              DCT works to catalyze solutions to key human, social, economic and
              environmental challenges.
            </p>
            <p className="founder-description">
              {" "}
              We invest creatively to stimulate innovation and growth, develop
              human capital to uplift capabilities and enhance potential; enable
              natural capital to foster sustainable solutions for a better
              living environment and nurture social capital to transform lives
              for a more inclusive and resilient society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheFounder;
