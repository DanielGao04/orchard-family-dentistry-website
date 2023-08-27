import React, { useState, useEffect } from "react";
import Orchard2 from "../../../images/OrchardFarm.jpg";

const ToothColouredDentistry = () => {
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
                    <p class="text-lg text-blue-300">MODERN TOOTH-COLOURED FILLINGS
</p>
    
                    <h2 class="block mt-4 text-4xl md:text-5xl font-semibold text-gray-800">
                    Tooth-Coloured Dentistry
                    </h2>
                        
                    <h2 class="block mt-4 text-3xl md:text-3xl font-semibold text-gray-800">
                    Did you know that the days when tooth ailments & cavities could only be treated with unsightly metal fillings are gone?
                    </h2>
                    <p class="mt-3 text-gray-500 md:text-lg">
                    Today, modern tooth-coloured fillings made of durable resin or porcelain can be bonded to your teeth for a stronger & more natural-looking effect. These revolutionary fillings are virtually undetectable & are easy to apply.                   
                    </p>
                   
                </div>
            </div>
        </div>
    </section>
  );
};

export default ToothColouredDentistry;
