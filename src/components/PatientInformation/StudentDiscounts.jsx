import React, { useState, useEffect } from "react";
import qualityServiceImg from "../../images/dental.jpg";

const StudentDiscounts = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-cover">

      {/* Student Discounts Banner */}
      <div className="bg-sky-100 py-4 text-blue-900 text-center p-24">
        <h1 className="text-6xl font-semibold mt-24 mb-5">Student Discounts</h1>
        <p className="text-4xl font-semibold mb-24">
          Studio Dental is proud to be a part of the Student Discount Network.
          We want to make dentistry affordable for everyone in the community, including students.
        </p>
      </div>

      {/* First Animated Section */}
      <div className={`flex bg-cover transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className={`px-40 flex flex-col justify-center md:w-3/4`}>
          <h1 className={`my-5 text-5xl text-blue-900 font-Poppins font-semibold text-center`}>
          100% Covered With Student ID<br />
          No Additional Fees for the Following Services:
          </h1>
          <p className="text-3xl text-blue-900 py-8 whitespace-wrap text-left mx-auto">
          •No Additional Fees for the Following Services:<br />
          •Dental Cleaning Services<br />
          •Comprehensive Exam<br />
          •Digital X-Rays<br />
          •Cleaning & Polishing<br />
          •Fluoride Treatment
          </p>
        </div>
        <img className={`md:w-1/8 h-1/8 lg:h-1/3 w-1/3`} src={qualityServiceImg} alt="" />
      </div>

      {/* Second Animated Section */}
      <div className={`flex bg-cover bg-sky-200 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : 'translate-x-full'}`}>
        <img className="md:w-1/8 h-1/8 lg:h-1/3 w-1/3" src={qualityServiceImg} alt="" />
        <div className="px-40 flex flex-col justify-center md:w-3/4">
          <h1 className="my-5 text-6xl text-blue-900 font-Poppins font-semibold text-center">
            Participating Schools:
          </h1>
          <p className="text-3xl text-blue-900 py-8 whitespace-wrap text-left mx-auto">
          • University of Toronto<br />
          • OCAD University<br />
          • Ryerson University<br />
          • Seneca College<br />
          • George Brown College<br />
          • Humber College<br />
          • York University<br />
          • Sheridan College
          </p>
        </div>
      </div>



      {/* Additional Information Section */}
      
        

          {/* Scheduling */}
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

          {/* Flexible Appointments */}
          <div className="mb-16 bg-cover bg-sky-100 px-16 md:px-48 py-16 mx-12 flex flex-col items-center justify-center">
            <h2 className="pb-3 text-5xl text-center font-semibold text-blue-900 font-Poppins">Healthy Gums Improve Your Overall Health</h2>
            <p className="mt-4 text-2xl text-center text-blue-900 font-Poppins pb-5">
              Research has linked gum disease to health problems like diabetes, heart disease, dementia & respiratory infection.
            </p>
            
            <a href="/patientinformation/patienteducation" class="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-2xl">
              Learn More
            </a>
          </div>

          
        </div>

  );
};

export default StudentDiscounts;
