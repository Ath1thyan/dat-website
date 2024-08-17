import React from "react";

const HowWeInnovate = () => {
  return (
    <section
      className=" px-10 md:px-48 py-10 md:py-20"
      // data-bgcolor="#fffff"
    >
      <p className="font-bold text-3xl md:text-5xl">How We Innovate</p>
      <div className="mt-10 flex flex-col md:flex-row gap-8 text-gray-500">
        <div className="md:w-1/3">
          <p>
            We believe that great inspiration begins with one question, or two.
            Is there another way? What is a bolder solution?
          </p>
          <br />
          <p>
            Together with our DCT Guild collaborating on each of our
            initiatives, our collective vision is to innovate ideas and champion
            new experiences by assembling the best and brightest, those with the
            passion and commitment to tackle all client challenges regardless of
            size, great or small, with unequivocal dedication, zeal and rigour.
          </p>
          <br />
          <p>
            We drive value for our clients, challenge the status quo and we
            build it together, for better.
          </p>
        </div>
        <div className="md:w-1/3">
          <p>
            We support innovation, work within our community and champion new
            ideas. We are continuously propelled forward by the people we work
            with and strive for personal and community enrichment for all
            generations of people in Qatar.
          </p>
          <br />
          <p>
            We are committed to assembling the best and brightest, those with
            the passion and commitment to tackle all client challenges
            regardless of size, great or small, with unequivocal dedication,
            zeal and rigour.
          </p>
        </div>
        <div className="md:w-1/3">
          <p>
            We empower, encourage positivity, embrace inclusivity and
            collaborate selflessly.
          </p>
          <br />
          <p>
            We drive value for our clients, we are brave together and challenge
            the status quo because we believe we don't have to build the same
            twice. We build it together, for better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeInnovate;
