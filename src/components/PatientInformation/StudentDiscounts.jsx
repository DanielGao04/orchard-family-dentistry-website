import React, { useState, useEffect } from "react";
import qualityServiceImg from "../../images/studentdiscounts1.jpg";
import qualityServiceImg2 from "../../images/studentdiscounts2.jpg";
const StudentDiscounts = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-cover">

      {/* Student Discounts Banner */}
      <div className="bg-sky-100 py-4 text-blue-900 text-center md:p-24">
        <h1 className="text-6xl mt-10 md:mt-24 mb-5">Student Discounts</h1>
        <p className="text-2xl mx-6 md:mx-0 md:text-4xl mb-10 md:mb-24">
          Orchard Family Dentistry is proud to be a part of the Student Discount Network.
          We want to make dentistry affordable for everyone in the community, including students.
        </p>
      </div>

      {/* First Animated Section Mobile*/}
      <div className={`md:hidden relative overflow-hidden bg-sky-200 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <img className={`w-full`} src={qualityServiceImg} alt="Quality Service" />
        <div className={`absolute inset-0 flex flex-col justify-center px-5 py-12 ext-center md:text-left bg-opacity-75 bg-white`}>
          <h1 className={`text-5xl text-blue-900 mb-4 text-center`}>
          100% Covered With Student ID
          </h1>
          <p className={`text-xl text-blue-900 leading-relaxed text-center`}>
          •No Additional Fees for the Following Services:<br />
          •Dental Cleaning Services<br />
          •Comprehensive Exam<br />
          •Digital X-Rays<br />
          •Cleaning & Polishing<br />
          •Fluoride Treatment</p>
        </div>
      </div>

      {/* Desktop Screen */}
      <div className={`hidden md:flex bg-cover bg-sky-200 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className={`px-40 flex flex-col justify-center md:w-3/4`}>
          <h1 className={`my-5 text-6xl text-blue-900 text-center`}>
            100% Covered With Student ID
          </h1>
          <p className="text-4xl text-blue-900 py-8 whitespace-wrap text-left mx-auto">
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



      {/* Second Animated Section Mobile*/}
      <section>
        <div className={`md:hidden relative overflow-hidden bg-sky-200 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <img className={`w-full`} src={qualityServiceImg} alt="Quality Service" />
        <div className={`absolute inset-0 flex flex-col justify-center px-6 py-12 text-center bg-opacity-75 bg-white`}>
          <h1 className={`my-5 text-5xl text-blue-900 text-center`}>
          Participating Schools:
          </h1>
          <p className={`text-xl text-blue-900 py-2 whitespace-wrap text-left mx-auto`}>
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
      
      {/* Desktop */}
        <div className={`hidden md:flex bg-cover bg-sky-100 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : 'translate-x-full'}`}>
        <img className="md:w-1/8 h-1/8 lg: h-1/3 w-1/3" src={qualityServiceImg2} alt=""/>
          <div className="px-40 flex flex-col justify-center md:w-3/4">
          <h1 className={`md:my-5 text-6xl text-blue-900 text-center`}>
          Participating Schools:
          </h1>
          <p className={`text-4xl text-blue-900 md:py-8 whitespace-wrap text-left mx-auto`}>
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
      </section>


      {/* Additional Information Section */}
      
        

          {/* Scheduling */}
          <div className="mb-8 md:mb-16 justify-center max-w-3xl mx-auto mt-16">
            <h1 className="text-5xl md:text-6xl text-center text-blue-900 ">Financial Options</h1>
            <p className="mx-5 md:mx-0 mt-8 text-2xl text-center text-blue-900 ">
              Insured & uninsured patients alike have a number of financing options available to them, including:
            </p>
            <p className="mx-5 md:mx-0 text-3xl text-blue-900 py-8 md:py-8 whitespace-wrap text-left md:px-48">
          • Convenient Payment Plans<br />
          • 0% Financing
          </p>
          </div>

          {/* Flexible Appointments */}
          <div className="mb-10 md:mb-16 bg-cover bg-sky-100 mx-8 px-5 py-6 md:px-16 md:px-48 md:py-16 md:mx-12 flex flex-col items-center justify-center">
            <h2 className="pb-3 text-4xl md:text-5xl text-center text-blue-900 ">Healthy Gums Improve Your Overall Health</h2>
            <p className="md:mt-4 text-xl md:text-2xl text-center text-blue-900 pb-5">
              Research has linked gum disease to health problems like diabetes, heart disease, dementia & respiratory infection.
            </p>
            
            <a href="/patientinformation/patienteducation" class="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-2xl">
              Learn More
            </a>
          </div>

          
        </div>

  );
};

export default StudentDiscounts;
