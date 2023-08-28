import React, { useState, useEffect } from "react";
import Orchard2 from "../../../images/dentalimplant.jpg";

const Xray2 = () => {
  const [ ,setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  },[]);

  return (
  
    <section class="bg-white">
        <div class="container px-6 py-5 mx-auto mb-12">
            <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <img class="object-cover w-full lg:mx-6 lg:w-2/4 rounded-xl h-78 lg:h-200" src={Orchard2}alt=""/>
    
                <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                    <p class="text-lg text-blue-300">COMFORT & FUNCTION OF NATURAL TEETH</p>
    
                    <h2 class="block mt-4 text-4xl md:text-5xl font-semibold text-gray-800">
                    Dental Implants
                    </h2>
                        
                    <h2 class="block mt-4 text-3xl md:text-3xl font-semibold text-gray-800">
                    Dental implants are man-made replacements for natural teeth & are essentially permanent, attached teeth that replace partials, bridges or dentures.</h2>
                    <p class="mt-3 text-gray-500 md:text-lg">
                    The implants themselves are artificial tooth roots anchored in the gum or jawbone, on which replacement teeth are permanently secured. A titanium implant is permanently attached to your bone & a prosthetic tooth (crown) is attached to the implant. Dental implants are preferred to bridges because they can improve your bite without damaging neighbouring teeth (like a bridge might). Treatment can be finished in three to five visits over the space of about four to 12 months.                    </p>
    
                   
                </div>

            </div>
            <p class="mt-10 text-gray-500 md:text-lg">
                Because implanted teeth are fixed in the mouth—rather than being removable, like dentures—they allow a return to the comfort & function of natural teeth. Increased chewing ability means you can enjoy more nutritious foods, contributing to your overall health & well-being.    
            </p>
        </div>
    </section>
  );
};

export default Xray2;
