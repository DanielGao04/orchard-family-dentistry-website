import React, { useState, useEffect } from "react";
import qualityServiceImg from "../../../images/dental.jpg";

const EmergencyDentistry = () => {
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
                  <span class="text-danger dark:text-danger-500">General Dental Care</span>
                </h1>
                <h2 class="mb-6 text-3xl ">
                  <span class="text-danger dark:text-danger-500">Here at Taunton Village Dental, we are committed to making sure your dental experience is comfortable, personalized & affordable.</span>
                </h2>
                <p class="mb-6 pb-2 text-neutral-500 text-2xl">
                We are part of a Oshawa tradition of dental excellence, offering state-of-the-art general dentistry services. We are conveniently located in Oshawa & are here for all your general dentistry needs. With a focus on family & cosmetic dentistry, we are happy to help you achieve a beautiful smile in our comfortable, safe & friendly environment. Our team offers a wide array of procedures, including crowns, dental implants, tooth-coloured dentistry, sedation dentistry, teeth whitening & more.           
                </p>
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
      <div class="grid grid-cols-2 grid-rows-2">

        <div className="my-10 mx-5">
            <h1 className="text-3xl">Low-Radiation Digital X-Rays</h1>
            <p>These images require up to 90% less radiation than with conventional film-type x-rays.</p>
        </div>

        <div className="my-10 mx-5">
            <h1 className="text-3xl">TMD (Jaw Pain) Therapy</h1>
            <p>A subtle misalignment in the temporomandibular joint can be a common & significant source of head & neck pain.</p>
        </div>

        <div className="my-10 mx-5">
           <h1 className="text-3xl"> Sedation Dentistry</h1>
           <p>Wake up to a more healthy & beautiful smile with amazingly comfortable sedation dentistry.</p>
        </div>

        <div className="my-10 mx-5">
            <h1 className="text-3xl">Emergency Care</h1>
            <p>Do not hesitate to seek help. Urgent dental care is provided usually the same day.</p>
        </div>

    </div>

      </div>
      <img className={`md:w-1/8 h-1/8 lg:h-1/3 w-1/3`} src={qualityServiceImg} alt="" />
    </div>




    </div>


  );
};

export default EmergencyDentistry;
