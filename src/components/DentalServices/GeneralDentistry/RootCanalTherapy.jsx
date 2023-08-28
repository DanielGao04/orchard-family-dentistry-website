import React, { useState, useEffect } from "react";
import Orchard2 from "../../../images/rootcanal.jpg";

const RootCanalTherapy = () => {
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
                    <p class="text-lg text-blue-300">Why Root Canals Are the Right Dental Option</p>
    
                    <h2 class="block mt-4 text-3xl md:text-4xl font-semibold text-gray-800 md:text-5xl">
                    Root Canal Treatment in Burlington
                    </h2>
                        
                    <p class="mt-3 text-gray-500 md:text-lg">
                    Root canals have a bad reputation but that is a misconception. They are needed to end an infection at the tooth's roots that is causing pain. A root canal is a procedure done by a professional dentist where they clean the root canals and then fill them with a safe product to prevent reinfecton. A root canal can save the tooth and help you feel better quickly.
                    </p>
                </div>
            </div>
        </div>



        <div className="flex bg-cover bg-sky-100 transform transition-transform duration-1500 justify-center py-10">
        <div className="px-10 md:px-40 md:w-3/4">
          <h1 className="my-5 text-4xl md:text-5xl text-blue-900 font-semibold text-left md:text-center pb-1">
            What Happens During a Root Canal
          </h1>
                   
          <div class="md:p-2 text-green-900 text-left text-2xl mb-5">
            <ul class="">
                <li class="mb-3">
                Those who are suffering from swollen or tender gums, tooth sensitivity, a cracked or chipped tooth, and pain while chewing or biting could be suffering from infected pulp at the base of the tooth. A dentist or endodontist will likely need to perform a root canal.
                </li>
                <li class="mb-3">
                Digital X-rays will be done first to show the damage. A local anethesia will be given to numb the area where work will be done. Then, the dentist will isolate the damaged tooth by inserting what is called a "dam." This keeps saliva away from it while the root canal is done.
                </li>
                <li class="mb-3">
                The dentist will make an opening at the top of the tooth, called the crown. They because using tiny instruments that are thin like a needle to clean out the pulp in the pulp chamber, along with the root canals, of infection. They will switch out instruments during this process. You will not feel any pain during the procedure.
                </li>
                <li class="mb-3">
                The root canals will be reshaped during this to prepare for filling. After all this is done, the dentist fills the spaces with gutta percha, which is a biocompatiable material. There is also an adhesive involved to make sure the space is sealed to prevent a re-infection.
                </li>
                <li>
                The dentist then places a temporary filling over where the crown was drilled. That will be replaced by a permanent, customized crown in about two to three weeks unless the dentist has customized crown capabilities within the office.
                </li>
            </ul>
        </div>
          <h1 className="text-4xl md:text-5xl text-blue-900 font-semibold text-left pt-7 pb-1">
          Orchard Family Dentistry Services
          </h1>
          <p className=" md:p-2 my-2 text-2xl text-green-900 text-left mb-12">
          Orchard Family Dentistry in Burlington offers full-service oral care including preventive dental care, restorative dental solutions, cosmetic dental services, and emergency dental care. It provides root canals and crowns among its many services. You will need to maintain oral care after a root canal to promote healing such as brushing, flossing, and using an antibacterial oral rinse. The dentist may also prescribe antibiotics to stop the spread or prevent infection.

      
            </p>
        </div>
      </div>
    </section>
  );
};

export default RootCanalTherapy;
