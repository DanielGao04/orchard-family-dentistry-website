import qualityServiceImg from "../../images/dental.jpg";

const PreventiveDentistry = () => {


  return (
    <div class="">
      <div className="bg-sky-300 py-4 text-white text-center">
        <p className="text-2xl font-semibold">
          Book Your Dental Appointment Today! Call: (123) 456-7890
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
                class="w-full" />
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto md:w-8/12">
              <div class="px-6 py-12 md:px-12">
                <h1 class=" text-4xl font-semi-bold">
                  <span class="text-danger">Preventive Care for the Entire Family</span>
                </h1>
                <h2 class="mb-6 text-2xl ">
                  <span class="text-danger">Preventive care, or preventive dentistry, is the area of dentistry concerned with preventing dental problems before they become costly, painful or both.</span>
                </h2>
                <p class="mb-6 pb-2 text-neutral-500 text-2xl">
                A large part of preventive care is patient education. This includes learning the proper at-home dental care, nutrition, etc. Another aspect of preventive care is oral hygiene through regular dental cleanings, fluoride treatments, mouth guards & more.</p>
                <a href="tel:99999999">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                    Call Us 99999999
                </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      
      <div className="px-5 bg-blue-100 py-1 md:py-4 md:px-72 text-blue-900 text-center md:p-24">
        <h1 className="text-4xl md:text-6xl mt-24 mb-5">
        Additionally, we are a family practice.
        </h1>
        <p className="text-2xl md:text-3xl mb-24">
        Our dentists have extensive experience with children & teens, so we can provide preventive care to everyone & make the dental experience better for the entire family.
        </p>
      </div>



    </div>


  );
};

export default PreventiveDentistry;
