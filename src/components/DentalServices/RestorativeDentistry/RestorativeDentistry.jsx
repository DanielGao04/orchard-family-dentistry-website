import React, { useState, useEffect } from "react";
import qualityServiceImg from "../../../images/dental.jpg";
import Orchard2 from "../../../images/Orchard2.jpg";
import crown from "../../../images/crown.png";
import denture from "../../../images/denture.png";
import dentalimplant from "../../../images/dental-implant.png";
import toothcolour from "../../../images/teethcolour.png";
import veneers from "../../../images/dental-veneer.png";
import mercury from "../../../images/mercury free.png";
import whitening from "../../../images/tooth-whitening.png";
import xray from "../../../images/x-ray.png";
import sedation from "../../../images/sedation.png";
import jaw from "../../../images/jaw.png";
import emergency from "../../../images/emergency.png";

const RestorativeDentistry = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {

          setAnimate(true);

    }, []);
  

  return (
    <div class="">
    <div class=" container my-24 ">
      <section class="mb-32 text-center md:text-left">
        <div class="block bg-white">
          <div class="flex flex-wrap items-center">
            <div
              class="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
              <img
                src={qualityServiceImg}
                alt=""
                class="w-full" />
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto md:w-8/12">
              <div class="px-6 py-12 md:px-12">
                <h1 class=" text-4xl font-semi-bold">
                  <span class="text-danger dark:text-danger-500">Restorative Dentistry In Oshawa</span>
                </h1>
                <h2 class="mb-6 text-2xl">
                  <span class="text-danger dark:text-danger-500">We offer restorative dentistry. We know that even when you do everything right, something can go wrong. If you are suffering from a dental problem, we are here to help.</span>
                </h2>
                <p class="mb-6 pb-2 text-neutral-500 text-2xl">
                Modern technology, combined with the in-depth experience of our clinical team, can assure you of a successful & long-lasting result. Whether the cause is accident or disease, we can restore your smile with Taunton Village Dental‘s many restorative dentistry options – Contact us today to learn more!                </p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Button
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <div className={`flex bg-cover bg-sky-100 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className={`px-40 flex flex-col justify-center md:w-3/4`}>
      <div class="grid grid-cols-2 grid-rows-2 text-center">

      <a href="/DentalServices/RestorativeDentistry/Crowns">
              <div className="min-w-sm bg-white rounded overflow-hidden shadow-lg p-4 h-full mx-1.5 mb-3 hover:bg-blue-300 hover:text-white transition">
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
              <div className="min-w-sm bg-white rounded overflow-hidden shadow-lg p-4 mb-3 mx-1.5 h-full hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={denture} alt="denture" />
                </div>
                <h1 className="text-2xl">Denture</h1>
                <p className="text-1xl">
                If you’ve lost teeth from decay, injury or periodontal (gum) disease, dentures are the solution.
                </p>
              </div>
            </a>

            <a href="/DentalServices/RestorativeDentistry/DentalImplants">
              <div className="min-w-sm bg-white rounded overflow-hidden shadow-lg p-4 h-full mx-1.5 mt-3 hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={dentalimplant} alt="dentalimplant" />
                </div>
                <h1 className="text-2xl">Dental Implants</h1>
                <p className="text-1xl">
                Dental implants are man-made replacements for natural teeth & are essentially permanent, attached teeth that replace partials, bridges or dentures.
                </p>
              </div>
            </a>
            <a href="/dentalservices/emergencydentistry">
              <div className="min-w-sm bg-white rounded overflow-hidden shadow-lg p-4 h-full mx-1.5 mt-3 hover:bg-blue-300 hover:text-white transition">
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
      <img className={`md:w-1/8 h-1/8 lg:h-1/3 w-1/3`} src={qualityServiceImg} alt="" />
    </div>




    </div>


  );
};

export default RestorativeDentistry;
