import React from "react";
import qualityServiceImg from "../../images/emergencydentistry.jpg";

const EmergencyDentistry = () => {


  return (
    <div class="">
      <div className="bg-sky-300 py-4 text-white text-center">
        <p className="text-2xl font-semibold">
          Book Your Dental Appointment Today! Call: 905-315-9937
        </p>
      </div>
      <div class=" container my-12 md:my-24 ">
        <section class="mb-32 text-center md:text-left">
          <div class="block bg-white">
            <div class="flex flex-wrap items-center">
              <div
                class="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
                <img
                  src={qualityServiceImg}
                  alt=""
                  class="shadow-2xl w-full rounded-2xl" />
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto md:w-8/12">
                <div class="px-4 py-8 md:px-12 md:py-12">
                  <h1 class=" text-4xl font-semi-bold">
                    <span class="text-danger">Need An Emergency Dentist In The Burington Area?</span>
                  </h1>
                  <h2 class="mb-6 text-2xl ">
                    <span class="text-danger">The thought of going to an emergency dentist in Burlington tends to invoke tension and angst for many people.</span>
                  </h2>
                  <p class="mb-6 pb-2 text-neutral-500 text-xl">
                  The anticipation of pain and feeling embarrassed for not having dental care regularly are some of the factors influencing the anxiety people feel. When a painful dental problem occurs, many people are unsure if they should go to an emergency dentist in Burlington. It’s important to know when a problem can wait for an appointment with a dentist or needs to be taken care of immediately.
                  </p>
                  <a href="tel:9053159937">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                      Call Us 905-315-9937
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex bg-cover bg-sky-100 transform transition-transform duration-1500 justify-center py-10">
        <div className="px-10 md:p-0 md:w-3/5">
          <h1 className="my-5 text-5xl text-blue-900 md:font-semibold text-center pb-1">
            How to Determine If a Dental Problem Is an Emergency
          </h1>
          <h2 className=" pb-8 md:py-2 md:pb-0 text-2xl md:text-3xl text-blue-900 text-left ">
          Situations when a dental checkup is needed but not urgent include a mild toothache, a small chip on a tooth, a molar filling that fell out but isn’t painful, or a loose tooth. These dental issues can be taken care of by making an appointment to see a dentist during regular business hours.          
          </h2>
          <p className="my-1 text-2xl text-blue-900 text-left font-semibold">
          The following dental problems may indicate a trip to an emergency dentist in Oshawa:          
          </p>
          <div class="p-5 text-blue-900 text-left text-2xl">
            <ul class="list-disc list-inside">
                <li class="mb-3">
                A toothache that causes debilitating pain and prevents someone from going about their daily life or causes severe pain during the night is considered a dental emergency. The toothache could be a sign of a dangerous abscess or a related medical problem.
                </li>
                <li class="mb-3">
                An injury that causes a tooth to be broken, causing a sharp edge that cuts into the tongue, needs to be taken care of right away. Leaving the tooth broken will cause more damage and swelling, making it harder to treat later. If the tooth was chipped and you can find the piece that fell out, bring that when you go to see the emergency dentist.
                </li>
                <li class="mb-3">
                An injury that results in one or more teeth falling out requires quick thinking and a trip to an emergency dentist. A baby tooth may not cause trouble, but an adult tooth could be saved. Find the tooth and put it in a container with cold milk. Pack the empty socket with gauze to control the bleeding and get to an emergency dentist right away. Fast actions mean an Oshawa emergency dentist may be able to save the tooth.
                </li>
                <li class="mb-3">
                If a crown comes off a tooth and causes extreme pain, a trip to an emergency dentist may be needed to help with the discomfort.
                </li>
                <li>
                A painful bite to the tongue that won’t stop bleeding could indicate the injury is more serious than thought and should be looked at right away.
                </li>
            </ul>
        </div>
        <p className="my-5 text-2xl text-blue-900 text-left ">
        These serious dental problems may become much worse if not cared for quickly. If in doubt, and the pain from a dental issue is intolerable, go see a Burlington emergency dentist.   
          </p>
          <h1 className=" text-5xl text-blue-900 md:font-semibold text-left pt-7 pb-1">
          Orchard Family Dentistry Services
          </h1>
          <p className="my-2 text-2xl text-blue-900 text-left ">
          Orchard Family Dentistry in Burlington offers full-service oral care including preventive dental care, restorative dental solutions, cosmetic dental services, and emergency dental care. Dental emergencies caused by playing sports, a car accident, a fall, or any other accident can’t be prevented. But practicing good dental hygiene and seeing a dentist regularly for cleanings and x-rays will do much to prevent dental emergencies. Besides regular dental appointments, remember to brush teeth every day, floss, avoid sugary foods, chew carefully when eating hard candy, and crunchy food items.          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyDentistry;
