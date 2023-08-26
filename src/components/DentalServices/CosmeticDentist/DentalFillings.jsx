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

const DentalFillings = () => {
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
                    <p class="text-lg text-blue-300">Dental Fillings Services In Oshawa

</p>
    
                    <h2 class="block mt-4 text-6xl font-semibold text-gray-800 dark:text-white md:text-5xl">
                    Tooth Fillings Oshawa, Ontario

                    </h2>
                        
                    <h2 class="block mt-4 text-6xl font-semibold text-gray-800 dark:text-white md:text-2xl">
                    Did you know that the days when tooth ailments & cavities could only be treated with unsightly metal fillings are gone?
                    </h2>
                    <p class="mt-3 text-gray-500 dark:text-gray-300 md:text-lg">
                    It helps even out the surface of your tooth, so you can bite and chew food correctly and speak properly. If you are suffering from tooth sensitivity due to loss of enamel, it can be significantly improved with a dental filling. The procedure can also help prevent further decay by closing off any space where bacteria can enter.
                    </p>

                    <p class="mt-3 text-gray-500 dark:text-gray-300 md:text-1xl">
                    Our licensed dentists at Taunton Village Dental have the expertise, experience, and tools to perform the dental filling procedure. We offer comprehensive dental care in Oshawa, so you can achieve a healthy and beautiful smile.

</p>

                    <p class="mt-3 text-gray-500 dark:text-gray-300 md:text-1xl">
                    From preventive care and routine hygiene to dental crown and root canal treatment, we are capable of helping you with your overall oral health needs. Visit us today to enjoy a comfortable and patient-focused environment.
                    </p>

                </div>
            </div>
        </div>
        <div className="flex bg-cover bg-sky-100 transform transition-transform duration-1500 justify-center py-10">
        <div className="px-40 md:w-3/4">
          <h1 className="my-5 text-5xl text-blue-900 font-semibold text-center pb-1">
          Choosing the Type of Dental Filling
        </h1>
        <p className="mb-3 text-lg text-gray-700">There are many types of dental fillings, and not all of them are the best choice for everyone. That is why careful evaluation of each filling type is necessary. Each type is categorized based on the material used, such as gold or porcelain fillings. Here is a breakdown of the most common types and their benefits.</p>
          <div class=" text-gray-700 text-left mb-5">
            <ul class="">
                <li class="mb-2">
                    <h1 className="text-2xl font-semibold">Gold</h1>
                    <p className="text-lg">Gold fillings are created in a laboratory and then cemented into your tooth. In terms of durability, they are often considered the strongest. With proper dental care, a gold filling may last for decades. The initial investment may be more expensive than other filling types, however many dental patients consider this worth it due to how long they last.</p>
                </li>
                <li class="mb-2">
                    <h1 className="text-2xl font-semibold">Amalgam</h1>
                    <p className="text-lg">Amalgam (silver) is a traditional material for dental fillings. They are reasonably durable and affordable. Similar to gold fillings, the metallic look will often make them noticeable when used on front teeth. For this reason, they are usually used towards the back of the mouth.</p>
                </li>
                <li class="mb-2">
                    <h1 className="text-2xl font-semibold">Composite</h1>
                    <p className="text-lg">Composite (plastic) fillings match the colour of your teeth for a natural appearance. These are ideal for smaller cavities and are not usually used on large ones, as they are usually less durable and may stain.</p>
                </li>
                <li class="mb-2">
                    <h1 className="text-2xl font-semibold">Porcelain</h1>
                    <p className="text-lg">Porcelain is another option that matches the colour of your tooth. This material resists staining and lasts longer than composite fillings.</p>
                </li>

            </ul>
        </div>
          <h1 className=" text-5xl text-blue-900 font-semibold text-left pt-7 pb-1">
          The Dental Filling Procedure
          </h1>
          <p className=" py-2 my-2 text-2xl text-gray-700 text-left mb-4">
          Your dentist will examine your teeth to determine problem areas and identify the location and severity of the decay. Once diagnosed, you will receive a local anesthetic to numb the affected tooth and increase your comfort throughout the procedure.
            </p>
            <p className=" py-2 my-2 text-2xl text-gray-700 text-left mb-12">
            Then, your dentist will begin removing the decayed tooth material and clean the affected area. The cleaned-out cavity will be filled with your chosen filling material.
            </p>
        </div>
      </div>
    </section>
  );
};

export default DentalFillings;
