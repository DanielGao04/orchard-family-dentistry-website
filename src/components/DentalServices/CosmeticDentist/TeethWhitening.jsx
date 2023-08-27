import React, { useState, useEffect } from "react";
import Orchard2 from "../../../images/OrchardFarm.jpg";

const TeethWhitening = () => {
  const [,setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  },[]);

  return (
    <section class="bg-white">
        <div class="container px-6 py-5 mx-auto mb-12">
            <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                
                <img class="object-cover w-full lg:mx-6 lg:w-2/4 rounded-xl h-78 lg:h-200" src={Orchard2}alt=""/>
    
                <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">

                    <p class="text-lg text-blue-300">
                    WHITER & BRIGHTER SMILE
                    </p>
    
                    <h2 class="block mt-4 text-4xl md:text-5xl font-semibold text-gray-800">
                    Teeth Whitening
                    </h2>
    
                    <h2 class="block mt-4 text-3xl md:text-3xl font-semibold text-gray-800">
                    Now you can have significantly whiter teeth in a matter of a few days using advanced teeth whitening techniques.
                    </h2>

                    <p class="mt-3 text-gray-500 md:text-lg">
                    Both comfortable & affordable, our teeth whitening procedure involves you wearing a specially crafted tray for a few hours in order to achieve a surprising difference in your smile! Call Taunton Village Dental today for more details.                    
                    </p>    

                </div>
            </div>
        </div>
    </section>
  );
};

export default TeethWhitening;
