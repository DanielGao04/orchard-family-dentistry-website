import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-100">
      <div className="container flex items-center justify-between py-2">
        <div className="hidden md:flex">
          <span className="border-r-2 border-black px-2">
            <i className="far fa-envelope w-5 text-primary"></i>
            info@adc.com
          </span>
          <span className="px-2">
            <i className="fas fa-phone text-primary"></i> +8801600000000
          </span>
        </div>
        <div className="flex items-center justify-between text-primary ">
          
        </div>
      </div>
    </div>
  );
};

export default Header;
