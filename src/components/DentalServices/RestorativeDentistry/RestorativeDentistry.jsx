import React, { useState, useEffect } from "react";
import qualityServiceImg from "../../../images/dental.jpg";
import qualityServiceImg2 from "../../../images/restorativedentistry.jpg";
import crown from "../../../images/crown.png";
import denture from "../../../images/denture.png";
import dentalimplant from "../../../images/dental-implant.png";
import emergency from "../../../images/emergency.png";

const RestorativeDentistry = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {

          setAnimate(true);

    }, []);
  

  return (
    <div class="">
      <div className="bg-sky-300 py-4 text-white text-center">
        <p className="text-2xl font-semibold">
          Book Your Dental Appointment Today! Call: 905-315-9937
        </p>
      </div>
    <div class=" container my-24 ">
      <section class="md:mb-32 text-center md:text-left">
        <div class="block bg-white">
          <div class="flex flex-wrap items-center">
            <div
              class="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
              <img
                src={qualityServiceImg2}
                alt=""
                class="shadow-2xl w-full rounded-2xl" />
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto md:w-8/12">
              <div class="px-6 py-12 md:px-12">
                <h1 class=" text-4xl font-semi-bold">
                  <span class="text-danger">Restorative Dentistry In Burlington</span>
                </h1>
                <h2 class="mb-6 text-2xl">
                  <span class="text-danger">We offer restorative dentistry. We know that even when you do everything right, something can go wrong. If you are suffering from a dental problem, we are here to help.</span>
                </h2>
                <p class="mb-6 pb-2 text-neutral-500 text-xl">
                Modern technology, combined with the in-depth experience of our clinical team, can assure you of a successful & long-lasting result. Whether the cause is accident or disease, we can restore your smile with Orchard Family Dentistry's many restorative dentistry options – Contact us today to learn more!                </p>
                <a href="tel:9053159937">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                    Call Us 905-315-9937
                </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <div className={`flex bg-cover bg-sky-100 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className={`flex flex-col justify-center md:w-3/4`}>
          <div class="px-5 md:px-0 md:py-10 md:w-3/4 md:mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-center">

          <img className={`shadow-2xl md:hidden w-full object-cover`} src={qualityServiceImg} alt="" />

            <a href="/DentalServices/RestorativeDentistry/Crowns" className="mb-5 md:mb-0 mt-5 md:mt-0">
            <div className="p-12 md:p-8 bg-white rounded overflow-hidden shadow-lg md:my-1.5 mx-1.5 h-[95%] hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={crown} alt="crown" />
                </div>
                <h1 className="text-2xl">Crowns</h1>
                <p className="text-1xl">
                These images require up to 90% less radiation than with conventional film-type x-rays.
                </p>
              </div>
            </a>

            <a href="/DentalServices/RestorativeDentistry/Dentures">
              <div className="p-12 md:p-8 bg-white rounded overflow-hidden shadow-lg md:my-1.5 mx-1.5 h-[95%] hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={denture} alt="denture" />
                </div>
                <h1 className="text-2xl">Denture</h1>
                <p className="text-1xl">
                If you’ve lost teeth from decay, injury or periodontal (gum) disease, dentures are the solution.
                </p>
              </div>
            </a>

            <a href="/DentalServices/RestorativeDentistry/DentalImplants" className="mb-5 mt-5 md:mt-0 md:mb-0">
              <div className="p-12 md:p-8 bg-white rounded overflow-hidden shadow-lg md:my-1.5 mx-1.5 h-[95%] hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={dentalimplant} alt="dentalimplant" />
                </div>
                <h1 className="text-2xl">Dental Implants</h1>
                <p className="text-1xl">
                Dental implants are man-made replacements for natural teeth & are essentially permanent, attached teeth that replace partials, bridges or dentures.
                </p>
              </div>
            </a>
            <a href="/dentalservices/emergencydentistry" className="mb-12 md:mb-0">
              <div className="p-12 md:p-8 bg-white rounded overflow-hidden shadow-lg md:my-1.5 mx-1.5 h-[95%] hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={emergency} alt="emergency" />
                </div>
                <h1 className="text-2xl">Emergency Care</h1>
                <p className="text-1xl">
                Do not hesitate to seek help. Urgent dental care is provided usually the same day.
                </p>
              </div>
            </a>
          </div>
        </div>
        <img className={`md:w-1/3 h-auto w-0 object-cover`} src={qualityServiceImg} alt="" />
      </div>
    </div>


  );
};

export default RestorativeDentistry;
