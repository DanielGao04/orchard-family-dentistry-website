import React, { useState, useEffect } from "react";
import qualityServiceImg from "../../../images/dental.jpg";
import Orchard2 from "../../../images/OrchardFarm.jpg";
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

const MercuryFreeDentistry = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-5 mx-auto mb-12">
            <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                
                <img class="object-cover w-full lg:mx-6 lg:w-2/4 rounded-xl h-78 lg:h-200" src={Orchard2}alt=""/>
    
                <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">

                    <p class="text-lg text-blue-300">
                    YOUR OVERALL HEALTH COMES FIRST                    
                    </p>
    
                    <h2 class="block mt-4 text-6xl font-semibold text-gray-800 dark:text-white md:text-5xl">
                    Mercury-Free Dentistry
                    </h2>
    
                    <h2 class="block mt-4 text-6xl font-semibold text-gray-800 dark:text-white md:text-2xl">
                    Mercury amalgam (silver) fillings may be hazardous to your health.                    
                    </h2>

                    <p class="mt-3 text-gray-500 dark:text-gray-300 md:text-lg">
                    At Taunton Village Dental, we believe that the overall health of our patients always comes first. Accordingly, at our office we have elected to only use new & advanced fillings made of tooth-coloured materials that contain no metals or mercury. It’s just one more way that we show our patients how much we care. Your safety & smile are our primary concerns!                    
                    </p>    

                </div>
            </div>
        </div>
    </section>
  );
};

export default MercuryFreeDentistry;
