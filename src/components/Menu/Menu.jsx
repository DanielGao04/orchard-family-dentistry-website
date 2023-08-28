import React, { useState } from "react";
import 'flowbite'; // Make sure to replace "path/to" with the actual path to flowbite CSS

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isDesktop = window.innerWidth >= 768;

  return (
    // Mobile
  <section>
    {!isDesktop ? (
    <div className="flex flex-wrap z-30">
      <div className="w-full">
        <nav className="static flex flex-wrap items-center justify-between px-2 py-3">
          <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a href="/"
                className="flex items-center text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              >
                <span className="text-2xl font-Poppins">
                  Orchard FD
                </span>
              </a>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={toggleMenu}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div
              className={`lg:flex flex-grow items-center ${menuOpen ? "flex" : "hidden"}`}
              id="navbar-info"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                <li className="nav-item dragdown">
                      <a
                        href="/"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      >
                        Home
                      </a>
                </li>

                <li>
                  <div class="flex">
                    <a href="/patientinformation">
                      <button class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" type="button">
                        PATIENT INFORMATION
                      </button>
                    </a>
                    <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown" class="font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center" type="button">
                      <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </button>
                  </div>

                  <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-54 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                      <li>
                        <a href="/patientinformation/scheduling" class="block px-7 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Scheduling</a>
                      </li>
                      <li>
                        <a href="/patientinformation/studentdiscounts" class="block px-7 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Student Discounts</a>
                      </li>
                      <li>
                        <div class="flex">
                          <a href="/patientinformation/patienteducation">
                            <button type="button" class="items-center w-full mx-6 py-2">
                              Patient Education
                            </button>
                          </a>
                          <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="bottom" type="button" class="ml-10 flex items-center justify-between w-full">
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                          </button>
                        </div>

                        <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                            <li>
                              <a href="/patientinformation/patienteducation/digitalxrays" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Digital X-Ray</a>
                            </li>
                            <li>
                              <a href="/patientinformation/patienteducation/intraoralcamera" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Intraoral Camera</a>
                            </li>
                            <li>
                              <a href="/patientinformation/patienteducation/localanesthesia" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Local Anesthesia</a>
                            </li>
                            <li>
                              <a href="/patientinformation/patienteducation/patientsafety" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Patient Safety</a>
                            </li>
                            <li>
                              <a href="/patientinformation/patienteducation/toothdecay" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tooth Decay</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>



                <li>
                  <div>
                    <a href="/Offers" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton2"
                        data-dropdown-toggle="dropdownAnother2"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Offers
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </a>
                  </div>
                </li>

                <li>
                  <div>
                    <a href="/MeetUs" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton3"
                        data-dropdown-toggle="dropdownAnother3"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Meet Us
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </a>
                  </div>
                </li>




                <li>
                  <div class="flex">
                    <a href="/dentalservices">
                      <button class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" type="button">
                        DENTAL SERVICES
                      </button>
                    </a>
                    <button id="multiLevelDropdownButton2" data-dropdown-toggle="dropdown2" class="font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center" type="button">
                      <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </button>
                  </div>

                  <div id="dropdown2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-54 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700" aria-labelledby="multiLevelDropdownButton2">

                      <li>
                        <a href="/dentalservices/emergencydentistry" class="block px-7 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Emergency Dentistry</a>
                      </li>
                      
                      <li>
                        <div class="flex">
                          <a href="/dentalservices/generaldentistry">
                            <button type="button" class="items-center w-full mx-7 py-2">
                              General Dentistry
                            </button>
                          </a>
                          <button id="doubleDropdownButton2" data-dropdown-toggle="doubleDropdown2" data-dropdown-placement="bottom" type="button" class="ml-16 flex items-center justify-between w-full">
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                          </button>
                        </div>

                        <div id="doubleDropdown2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                          <ul class="py-2 text-sm text-gray-700" aria-labelledby="doubleDropdownButton2">
                            <li>
                              <a href="/dentalservices/generaldentistry/digitalxrays2" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Digital X-Ray</a>
                            </li>
                            <li>
                              <a href="/dentalservices/generaldentistry/sedationdentistry" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sedation Dentistry</a>
                            </li>
                            <li>
                              <a href="/dentalservices/generaldentistry/wisdomteethremoval" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Wisdom Teeth Removal</a>
                            </li>
                            <li>
                              <a href="/dentalservices/generaldentistry/rootcanaltherapy" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Root Canal Therapy</a>
                            </li>
                          </ul>
                        </div>                   
                      </li>


                      <li>
                        <div class="flex">
                          <a href="/dentalservices/restorativedentistry">
                            <button type="button" class="items-center w-full mx-7 py-2">
                            Restorative Dentistry
                            </button>
                          </a>
                          <button id="doubleDropdownButton3" data-dropdown-toggle="doubleDropdown3" data-dropdown-placement="bottom" type="button" class="ml-11 flex items-center justify-between w-full">
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                          </button>
                        </div>

                        <div id="doubleDropdown3" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton3">
                            <li>
                              <a href="/dentalservices/restorativedentistry/crowns" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Crowns</a>
                            </li>
                            <li>
                              <a href="/dentalservices/restorativedentistry/dentures" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dentures</a>
                            </li>
                            <li>
                              <a href="/dentalservices/restorativedentistry/dentalimplants" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dental Implants</a>
                            </li>
     
                          </ul>
                        </div>
                      </li>
                      
                      <li>
                        <div class="flex">
                          <a href="/dentalservices/patienteducation">
                            <button type="button" class="items-center w-full mx-6 py-2">
                              Cosmetic Dentist
                            </button>
                          </a>
                          <button id="doubleDropdownButton4" data-dropdown-toggle="doubleDropdown4" data-dropdown-placement="bottom" type="button" class="ml-16 flex items-center justify-between w-full">
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                          </button>
                        </div>

                        <div id="doubleDropdown4" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton4">
                            <li>
                              <a href="/dentalservices/cosmeticdentist/toothcoloureddentistry" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tooth-Coloured Dentistry</a>
                            </li>
                            <li>
                              <a href="/dentalservices/cosmeticdentist/dentalfillings" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dental Filling</a>
                            </li>
                            <li>
                              <a href="/dentalServices/cosmeticDentist/porcelainveneers" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Porcelain Veneers</a>
                            </li>
                            <li>
                              <a href="/dentalservices/cosmeticdentist/mercuryfreedentistry" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mercury-Free Dentistry</a>
                            </li>
                            <li>
                              <a href="/dentalservices/cosmeticdentist/teethwhitening" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Teeth Whitening</a>
                            </li>
                          </ul>
                        </div>
                      </li>


                      <li>
                        <a href="/dentalservices/preventativecare" class="block px-7 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Preventive Care</a>
                      </li>

                      <li>
                        <a href="/dentalservices/invisalign" class="block px-7 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Invisalign</a>
                      </li>

                      
                      
                      
                    </ul>
                  </div>
                </li>
                


                <li>
                  <div>
                    <a href="/ContactUs" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton5"
                        data-dropdown-toggle="dropdownAnother5"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Contact Us
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </a>
                  </div>
                </li>



                <li>
                  <div className="mr-2">
                    <a href="/Blog" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton6"
                        data-dropdown-toggle="dropdownAnother6"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Blog
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </a>
                  </div>
                </li>

                <li className="nav-item bg-sky-600">
                  <a
                    href="/appointment"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    Book Appointment
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    ) : (

//Desktop

    <div className="flex flex-wrap z-30">
      <div className="w-full">
        <nav className="static flex flex-wrap items-center justify-between px-2 py-3">
          <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a href="/"
                className="flex items-center text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              >
                <span className="text-2xl font-Poppins">
                  Orchard FD
                </span>
              </a>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={toggleMenu}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div
              className={`lg:flex flex-grow items-center ${menuOpen ? "flex" : "hidden"}`}
              id="navbar-info"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                <li className="nav-item dragdown">
                      <a
                        href="/"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      >
                        Home
                      </a>
                </li>



                <li>
                <a href="/patientinformation">
                  <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown2" data-dropdown-delay="100" data-dropdown-trigger="hover" className="z-30 hover:opacity-75 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8" type="button">
                    Patient Information
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </button>
                </a>
                  
                  <div id="dropdown2" class="z-10 hidden bg-white rounded-lg shadow w-44 min-w-[22] px-3 m-0 z-30">
                      <ul class="py-2 text-sm text-gray-700" aria-labelledby="multiLevelDropdownButton">
                        
                        <li>
                          <a href="/patientinformation/scheduling" class="block px-4 py-2 hover:bg-gray-100">Scheduling</a>
                        </li>
                        <li>
                          <a href="/patientinformation/studentdiscounts" class="block px-4 py-2 hover:bg-gray-100">Student Discounts</a>
                        </li>
                             
                        <li class="relative">
                          <a href="/patientinformation/patienteducation">
                            <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-delay="100" data-dropdown-trigger="hover" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                              Patient Education
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/><svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                              </svg>
                            </button>
                          </a>
                            <div id="doubleDropdown" class="z-10 hidden bg-white rounded-lg shadow w-44 min-w-[88] px-3 m-0">
                              <ul class="py-2 text-sm text-gray-700" aria-labelledby="doubleDropdownButton">
                                <li>
                                  <a href="/patientinformation/patienteducation/digitalxrays" class="block px-4 py-2 hover:bg-gray-100">Digital X-Ray</a>
                                </li>
                                <li>
                                  <a href="/patientinformation/patienteducation/intraoralcamera" class="block px-4 py-2 hover:bg-gray-100">Intraoral Camera</a>
                                </li>
                                <li>
                                  <a href="/patientinformation/patienteducation/localanesthesia" class="block px-4 py-2 hover:bg-gray-100">Local Anesthesia</a>
                                </li>
                                <li>
                                  <a href="/patientinformation/patienteducation/patientsafety" class="block px-4 py-2 hover:bg-gray-100">Patient Safety</a>
                                </li>
                                <li>
                                  <a href="/patientinformation/patienteducation/toothdecay" class="block px-4 py-2 hover:bg-gray-100">Tooth Decay</a>
                                </li>
                              </ul>
                            </div>
                        </li>

                      </ul>
                  </div>
                </li>



                <li>
                  <div>
                    <a href="/Offers" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton2"
                        data-dropdown-toggle="dropdownAnother2"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Offers
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </a>
                  </div>
                </li>

                <li>
                  <div>
                    <a href="/MeetUs" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton3"
                        data-dropdown-toggle="dropdownAnother3"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Meet Us
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </a>
                  </div>
                </li>

                <li>
                  <div>
                    <a href="/dentalservices" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton40"
                        data-dropdown-toggle="dropdownAnother40"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Dental Services
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </a>

                    <div
                      id="dropdownAnother40"
                      className="z-30 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 px-3"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700"
                        aria-labelledby="dropdownAnotherButton4"
                      >
                        <li>
                          <a
                            href="/dentalservices/emergencydentistry"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Emergency Dentistry
                          </a>
                        </li>

                        <li class="relative">
                          <a href="/dentalservices/generaldentistry">
                            <button id="doubleDropdownButton2" data-dropdown-toggle="doubleDropdown2" data-dropdown-delay="100" data-dropdown-trigger="hover" data-dropdown-placement="right-start" type="button" class="z-30 flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                              General Dentistry
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                              </svg>
                            </button>
                          </a>
                            <div id="doubleDropdown2" class="z-30 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 left-0 top-0 min-w-[0] px-3 m-0">
                              <ul class="py-2 text-sm text-gray-700" aria-labelledby="doubleDropdownButton2">
                                <li>
                                  <a href="/DentalServices/GeneralDentistry/DigitalXRays2" class="block px-4 py-2 hover:bg-gray-100">Digital X-Ray</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/GeneralDentistry/SedationDentistry" class="block px-4 py-2 hover:bg-gray-100">Sedation Dentistry</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/GeneralDentistry/WisdomTeethRemoval" class="block px-4 py-2 hover:bg-gray-100">Wisdom Teeth Removal</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/GeneralDentistry/RootCanalTherapy" class="block px-4 py-2 hover:bg-gray-100">Root Canal Therapy</a>
                                </li>
                              </ul>
                            </div>
                        </li>

                        <li class="relative">
                          <a href="/DentalServices/RestorativeDentistry">
                            <button id="doubleDropdownButton3" data-dropdown-toggle="doubleDropdown3" data-dropdown-delay="100" data-dropdown-trigger="hover" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                            Restorative Dentistry
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                              </svg>
                            </button>
                          </a>
                            <div id="doubleDropdown3" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 left-0 top-0 min-w-[0] px-3 m-0">
                              <ul class="py-2 text-sm text-gray-700" aria-labelledby="doubleDropdownButton3">
                                <li>
                                  <a href="/DentalServices/RestorativeDentistry/Crowns" class="block px-4 py-2 hover:bg-gray-100">Crowns</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/RestorativeDentistry/Dentures" class="block px-4 py-2 hover:bg-gray-100">Dentures</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/RestorativeDentistry/DentalImplants" class="block px-4 py-2 hover:bg-gray-100">Dental Implants</a>
                                </li>
                              </ul>
                            </div>
                        </li>

                        <li class="relative">
                          <a href="/DentalServices/CosmeticDentist">
                            <button id="doubleDropdownButton4" data-dropdown-toggle="doubleDropdown4" data-dropdown-delay="100" data-dropdown-trigger="hover" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                            Cosmetic Dentist
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                              </svg>
                            </button>
                          </a>
                            <div id="doubleDropdown4" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 left-0 top-0 min-w-[0] px-3 m-0">
                              <ul class="py-2 text-sm text-gray-700" aria-labelledby="doubleDropdownButton4">
                                <li>
                                  <a href="/DentalServices/CosmeticDentist/ToothColouredDentistry" class="block px-4 py-2 hover:bg-gray-100">Tooth-Coloured Dentistry</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/CosmeticDentist/DentalFillings" class="block px-4 py-2 hover:bg-gray-100">Dental Filing</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/CosmeticDentist/PorcelainVeneers" class="block px-4 py-2 hover:bg-gray-100">Porcelain Veneers</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/CosmeticDentist/MercuryFreeDentistry" class="block px-4 py-2 hover:bg-gray-100">Mercury-Free Dentistry</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/CosmeticDentist/TeethWhitening" class="block px-4 py-2 hover:bg-gray-100">Teeth Whitening</a>
                                </li>
                              </ul>
                            </div>
                        </li>

                        <li>
                          <a
                            href="/dentalservices/preventativecare"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Preventive Care
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dentalservices/invisaline"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Invisalign
                          </a>
                        </li>
                        {/* Add more sections here */}
                      </ul>
                    </div>
                  </div>
                </li>
                
                <li>
                  <div>
                    <a href="/ContactUs" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton5"
                        data-dropdown-toggle="dropdownAnother5"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Contact Us
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </a>

                    
                  </div>
                </li>

                <li>
                  <div className="mr-2">
                    <a href="/Blog" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton6"
                        data-dropdown-toggle="dropdownAnother6"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Blog
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </a>
                  </div>
                </li>

                <li className="nav-item bg-sky-600">
                  <a
                    href="/appointment"
                    className="z-5 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    Book Appointment
                  </a>
                </li>

              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    </div>

    )}
    </section>
  );
};

export default Menu;
