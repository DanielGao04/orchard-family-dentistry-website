import React, { useState, useEffect } from "react";
import qualityServiceImg from "../../images/dental.jpg";

const Offers = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-cover">

      {/* Student Discounts Banner */}
      <div className="bg-sky-100 py-4 px-72 text-blue-900 text-center p-24">
        <h1 className="text-6xl font-semibold mt-24 mb-5">
          Special Offers for All Patients
        </h1>
        <p className="text-3xl font-semibold mb-24">
          We want to make it as easy as possible for all Mississauga, Toronto, Scarborough, & Etobicoke residents to get the dental care they need. Whether you are new to our office or a longtime patient, we're here for you & will make sure you pay as little as possible, in some cases nothing at all, for our excellent services.
        </p>
      </div>

      {/* First Animated Section */}
      <div className={`flex bg-cover transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className={`px-40 flex flex-col justify-center md:w-3/4`}>
          <h1 className={`my-5 text-4xl text-blue-900 font-Poppins font-semibold text-center`}>
            Little or No Out-of-Pocket Costs for Insured
            Patients on the Services Below*
          </h1>
          <p className="text-3xl text-blue-900 whitespace-wrap text-center mx-auto">
            Cash Pricing<br />
            Cleaning, Exam & Digital X-Rays ~ $99
          </p>
          <p className="text-2xl text-blue-900 whitespace-wrap text-center mx-auto">
            Includes two units of scaling, bitewings & exam.
          </p>

          <p className="text-3xl text-blue-900 whitespace-wrap text-center mx-auto">
            Children’s Exam & Cleaning ~ $75<br />
            FREE Second Opinion/Consultation
          </p>
          <p className="text-1xl text-blue-900 whitespace-wrap text-center mx-auto">
            *Patient responsible for deductible & co-payment fees.
          </p>
          <h1 className={`my-5 text-4xl text-blue-900 font-Poppins font-semibold text-center`}>
            At Studio Dental, we have convenient hours that won’t make you miss work or school. In fact, we can see you this week & you’ll be in & out within an hour.
          </h1>
        </div>
        <img className={`md:w-1/8 h-1/8 lg:h-1/3 w-1/3`} src={qualityServiceImg} alt="" />
      </div>

      {/* Second Animated Section */}
      <div className={`flex bg-cover bg-blue-100 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : 'translate-x-full'}`}>
        <img className="md:w-1/8 h-1/8 lg:h-1/3 w-1/3" src={qualityServiceImg} alt="" />
        <div className="px-40 flex flex-col justify-center md:w-3/4">
          <h1 className="my-5 text-6xl text-blue-900 font-Poppins font-semibold text-center">
            We Provide Care for Refugees
          </h1>
          <p className="text-3xl text-blue-900 py-8 whitespace-wrap text-center mx-auto">
            The Interim Federal Health Program (IFHP) provides emergency dental coverage of healthcare benefits for specific groups of people in Canada who don’t have provincial, territorial, or private health-care coverage. If you have a dental emergency, you can use these benefits at Studio Dental. Please give us a call to learn about our convenient hours & to schedule your dental appointment.
          </p>
          <p className="text-3xl text-blue-900 py-3 whitespace-wrap text-center mx-auto">
            According to the Government of Canada website, the IFHP will cover some medical services. The services not requiring prior approval include:
          </p>
          <p className="text-3xl text-blue-900 py-3 whitespace-wrap text-center mx-auto">
            Emergency Exams • Bitewing X-Rays • Fillings • Bonding • Extractions
          </p>
          <p className="text-3xl text-blue-900 py-3 whitespace-wrap text-center mx-auto">
          <a href="#">See a full list of benefits as well as payment rules HYPERLINK TO A PDF</a>
          <a href="#">Check your eligibility ADD HYPERLINK</a>
          </p>

        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mb-16 justify-center max-w-3xl mx-auto mt-16">
        <h1 className="text-6xl font-semibold text-center text-blue-900 font-Poppins">Financial Options</h1>
        <p className="mt-8 text-2xl text-center text-blue-900 font-Poppins">
          Insured & uninsured patients alike have a number of financing options available to them, including:
        </p>
        <p className="text-3xl text-blue-900 py-8 whitespace-wrap text-left p-48">
          • Convenient Payment Plans<br />
          • 0% Financing
        </p>
      </div>

    </div>
  );
};

export default Offers;
