import qualityServiceImg from "../../images/dental.jpg";

const ThankYouPage = () => {
  return (
    <div className={`flex bg-cover bg-sky-200 transform transition-transform duration-1500`}>
      <div className={`px-40 flex flex-col justify-center md:w-3/4`}>
        <h1 className={`my-5 text-6xl text-blue-900 text-center`}>
         Thank You For Your Time!
        </h1>
        <p className={`text-3xl text-blue-900 py-8 whitespace-wrap text-center`}>
          We will respond back to you as soon as possible to confirm appointment dentails!
        </p>
      </div>
      <img className={`md:w-1/8 h-1/8 lg:h-1/3 w-1/3`} src={qualityServiceImg} alt="" />
    </div>
  );
};

export default ThankYouPage;
