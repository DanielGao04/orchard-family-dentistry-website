import React from "react";
import bgImg2 from "./../../images/bg_3.jpg";

const ClinicalFacts = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center  w-full h-80"
        style={{
          backgroundImage: `url(${bgImg2})`,
        }}
      >
        <div className="opacity-80 absolute bg-black  w-full h-80"></div>
        <div className="container relative py-8 text-center text-white">
          <h1 className="text-4xl py-2  font-semibold">
            One Office for all your Needs
          </h1>
          <p>
            If your smile is not becoming to you, then you should be coming to
            us!
          </p>
          <div className="flex justify-between items-center py-16">
            <div className="">
              <h1 className="text-4xl font-extrabold">Many</h1>
              <p className="text-secondary italic text-2xl  font-semibold">
                Years Of Experience
              </p>
            </div>

            <div className="">
              <h1 className="text-4xl font-extrabold">Only</h1>
              <p className="text-secondary italic text-2xl  font-semibold">
                Happy Customers
              </p>
            </div>

            <div className="">
              <h1 className="text-4xl font-extrabold">100%</h1>
              <p className="text-secondary italic text-2xl  font-semibold">
                Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicalFacts;
