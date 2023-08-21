import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import dentist from "../../images/dentist.jpg";

const PatientInformation = () => {
  return (
    <div className="flex flex-col bg-cover min-h-screen transform transition-transform duration-1500">
      <div className="flex bg-cover bg-sky-300 transform transition-transform duration-1500 justify-center py-16 relative" style={{ backgroundImage: `url(${dentist})`, height: "500px" }}>
        <h1 className="my-5 text-8xl text-white  font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Patient Information
        </h1>
      </div>

      <div className="w-full max-w-6xl mx-auto px-8 py-9">
        <p className="text-3xl py-4 whitespace-wrap">
          Whether you’re a new patient or a returning patient, here is where you’ll find the information you need to get the most out of your visit.
        </p>

        <p className="text-2xl py-4 whitespace-wrap">
          To us, being a dentist in Burlington means being a pillar of health in the community. To achieve that, we want to be as clear as possible about what you can expect & what we provide. Every patient is different, so this is by no means an exhaustive list of what you might want to know when visiting our office, but it’s a start. Please feel free to call us if you have questions about these topics or anything else.
        </p>

        <p className="text-2xl py-4 whitespace-wrap">
          Please view the pages below to see what sets us apart from any other dentist. We look forward to your visit & showing you the difference that caring & compassionate dental care can make in your life.
        </p>

        <div className="w-full max-w-3xl text-2xl py-12">
          <h2 className="my-5 text-5xl text-blue-900 font-semibold">
            Additional Information
          </h2>
          
          <nav className="nav-container flex justify-left text-3xl">
            <div className="nav-column mr-8">
              <ul className="space-y-1">
                <li>
                  <a href="/patientinformation/scheduling" className="hover:underline transition duration-300">
                    Scheduling
                  </a>
                </li>
                <li>
                  <a href="/patientinformation/studentdiscount" className="hover:underline transition duration-300">
                    Student Discounts
                  </a>
                </li>
                <li>
                  <a href="/patientinformation/patienteducation" className="hover:underline transition duration-300">
                    Patient Education
                  </a>
                </li>
                <li className="text-left justify-left">
                  <a href="/patientinformation/patienteducation/digitalxrays" className="hover:underline transition duration-300">
                    Digital X-Rays
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="nav-column">
              <ul className="space-y-1">
                <li>
                  <a href="/patientinformation/patienteducation/intraoralcamera" className="hover:underline transition duration-300">
                    Intraoral Camera
                  </a>
                </li>
                <li>
                  <a href="/patientinformation/patienteducation/localanesthesia" className="hover:underline transition duration-300">
                    Local Anesthesia
                  </a>
                </li>
                <li>
                  <a href="/patientinformation/patienteducation/patientsafety" className="hover:underline transition duration-300">
                    Patient Safety
                  </a>
                </li>
                <li>
                  <a href="/patientinformation/patienteducation/toothdecay" className="hover:underline transition duration-300">
                    Tooth Decay
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PatientInformation;
