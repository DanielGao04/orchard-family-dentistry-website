import React from "react";
import toothcolour from "../../images/teethcolour.png";
import veneers from "../../images/dental-veneer.png";
import mercury from "../../images/mercury free.png";
import clinicalfacts from "../../images/clinicalfacts.jpg";

const ClinicalFacts = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${clinicalfacts})`,
      }}
      className="bg-cover bg-center relative"
    >
      <div className="bg-black bg-opacity-0 py-4 text-blue-900 text-center md:mx-auto">
        <h1 className="text-white text-4xl mx-7 md:mx-0 md:text-5xl mt-10 md:mt-20">One Office for All Your Dental Needs</h1>
        <div className="flex flex-col">
          <div className="opacity-90 p-7 md:flex justify-center md:space-x-10">
            {/* Tooth-Coloured Dentistry */}
            <div className="rounded-xl my-5 w-full md:w-1/5 bg-green-300">
              <a href="/DentalServices/GeneralDentistry">
                <div className="text-green-800 min-w-sm rounded-xl overflow-hidden shadow-lg p-4 h-full bg-opacity-100 hover:bg-green-800 hover:text-green-200 transition">
                  <div className="flex justify-center items-center mb-4">
                    <img className="w-1/3 h-auto" src={mercury} alt="tooth" />
                  </div>
                  <h1 className="text-2xl">General Dentistry</h1>
                </div>
              </a>
            </div>
            {/* Porcelain Veneers */}
            <div className="rounded-xl my-5 w-full md:w-1/5 bg-green-300">
              <a href="/DentalServices/RestorativeDentistry">
                <div className="text-green-800  min-w-sm rounded-xl overflow-hidden shadow-lg p-4 h-full bg-opacity-100 hover:bg-green-800 hover:text-green-200 transition">
                  <div className="flex justify-center items-center mb-4">
                    <img className="w-1/3 h-auto" src={veneers} alt="teeth" />
                  </div>
                  <h1 className="text-2xl">Restorative Dentistry</h1>
                </div>
              </a>
            </div>
            {/* Mercury-Free Dentistry */}
            <div className="rounded-xl my-5 w-full md:w-1/5 bg-green-300">
              <a href="/DentalServices/CosmeticDentist">
                <div className="text-green-800 min-w-sm rounded-xl overflow-hidden shadow-lg p-4 h-full bg-opacity-100 hover:bg-green-800 hover:text-green-200 transition">
                  <div className="flex justify-center items-center mb-4">
                    <img className="w-1/3 h-auto" src={toothcolour} alt="tooth" />
                  </div>
                  <h1 className="text-2xl">Cosmetic Dentist</h1>
                </div>
              </a>
            </div>
          </div>

          <div className="mb-8">
            <a href="/dentalservices" class="opacity-90 mt-4 bg-white transition hover:bg-green-600 text-green-800 hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded text-2xl">
              All Services
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ClinicalFacts;
