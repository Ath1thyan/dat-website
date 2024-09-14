import React from "react";
import { image1 } from "../assets/index";

const OurPolicies = () => {
  return (
    <div id="OurPolicies" className="relative bg-[#ff7e00] text-white py-32">
      <div className="absolute inset-0">
        <img
          src={image1}
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-6xl font-helvetica-bold text-white mb-8">
          Our Policies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-helvetica-bold text-white uppercase">
              Ethical Business Practices
            </h3>
            <p className="mt-2 font-helvetica-light">
              DCT is committed to ethical business practices that protect and
              respect our employees and partners.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-helvetica-bold text-white uppercase">
              Etiquette Code
            </h3>
            <p className="mt-2 font-helvetica-light">
              DCT's Etiquette Code is a set of guiding principles aligned to our
              Values and culture, and defines how we can put our Values into
              practice.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-helvetica-bold text-white uppercase">
              Sustainability Policy
            </h3>
            <p className="mt-2 font-helvetica-light">
              Sustainability is a key priority for DCT, to enhance and integrate
              client preferences into our portfolio of initiatives, strategy and
              processes, in ways that support a fundamental shift in production
              and consumption needs of today and tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPolicies;
