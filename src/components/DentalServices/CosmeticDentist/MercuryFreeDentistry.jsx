import React, { useState, useEffect } from "react";
import Orchard2 from "../../../images/OrchardFarm.jpg";


const MercuryFreeDentistry = () => {
  const [setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, );

  return (
    <section class="bg-white">
        <div class="container px-6 py-5 mx-auto mb-12">
            <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                
                <img class="object-cover w-full lg:mx-6 lg:w-2/4 rounded-xl h-78 lg:h-200" src={Orchard2}alt=""/>
    
                <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">

                    <p class="text-lg text-blue-300">
                    YOUR OVERALL HEALTH COMES FIRST                    
                    </p>
    
                    <h2 class="block mt-4 text-4xl md:text-4xl font-semibold text-gray-800 md:text-5xl">
                    Mercury-Free Dentistry
                    </h2>
    
                    <h2 class="block mt-4 text-3xl md:text-3xl font-semibold text-gray-800 md:text-5xl">
                    Mercury amalgam (silver) fillings may be hazardous to your health.                    
                    </h2>

                    <p class="mt-3 text-gray-500 md:text-lg">
                    At Taunton Village Dental, we believe that the overall health of our patients always comes first. Accordingly, at our office we have elected to only use new & advanced fillings made of tooth-coloured materials that contain no metals or mercury. It’s just one more way that we show our patients how much we care. Your safety & smile are our primary concerns!                    
                    </p>    

                </div>
            </div>
        </div>
    </section>
  );
};

export default MercuryFreeDentistry;
