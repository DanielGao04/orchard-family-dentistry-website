import React, { useState, useEffect } from "react";
import Orchard2 from "../../../images/porcelainveneers.jpg";

const PorcelainVeneers = () => {
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
                    EXCELLENT ALTERNATIVE TO CROWNS
                    </p>
    
                    <h2 class="block mt-4 text-3xl md:text-5xl font-semibold text-gray-800">
                    Porcelain Veneers
                    </h2>
    
                    <h2 class="block mt-2 md:mt-4 md:text-3xl md:text-3xl font-semibold text-gray-800">
                    Porcelain veneers are an excellent alternative to crowns & can perfect your smile by masking stains, hiding chips, correcting misalignment & creating uniformity.                    
                    </h2>

                    <p class="mt-3 text-gray-500 md:text-lg">
                    Veneers can be placed over existing teeth without the removal of any form of tooth structure. Therefore, anesthesia & temporaries are not required. This no-prep technique is perfect for stained, chipped, misaligned or spaced teeth. Bonding porcelain to enamel creates a solid, secure bond, meaning that you’ll have a safe, relatively easy, attractive & long-term solution with porcelain veneers.                    
                    </p>    

                </div>
            </div>
        </div>
    </section>
  );
};

export default PorcelainVeneers;
