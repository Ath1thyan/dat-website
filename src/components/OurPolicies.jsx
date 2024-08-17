// import React from 'react';

// const OurPolicies = () => {
//   return (
//     <section className="section our-policies" data-bgcolor="#FFB7B2">
//       <h1>Our Policies</h1>
//       <p>Your content here...</p>
//     </section>
//   );
// };

// export default OurPolicies;

import React from "react";
import Image1 from "../assets/image1.avif";

const OurPolicies = () => {
  return (
    <div className="relative bg-purple-800 text-white py-32">
      <div className="absolute inset-0">
        <img
          src={Image1}
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-6xl font-bold text-yellow-500 mb-8">
          Our Policies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 uppercase">
              Ethical Business Practices
            </h3>
            <p className="mt-2">
              DCT is committed to ethical business practices that protect and
              respect our employees and partners.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 uppercase">
              Etiquette Code
            </h3>
            <p className="mt-2">
              DCT's Etiquette Code is a set of guiding principles aligned to our
              Values and culture, and defines how we can put our Values into
              practice.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 uppercase">
              Sustainability Policy
            </h3>
            <p className="mt-2">
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
