const Platforms = () => {
    return (
      <div className="bg-black py-16">
        <div className="container mx-auto text-center px-4 lg:px-0">
          <h2 className="text-3xl font-bold text-[#00d61c] mb-6">Connect with Wellness Apps</h2>
          <p className="text-gray-400 mb-8">
          Seamlessly integrate with leading wellness and fitness platforms to enhance your holistic well-being journey.
          </p>
  
          {/* Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 p-4">
              <img src="/images/calm.png" alt="Calm" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 p-4">
              <img src="/images/headspace.jpg" alt="Headspace" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 p-4">
              <img src="/images/Fitbit.png" alt="Fitbit" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 p-4">
              <img src="/images/MyFitnessPal.png" alt="MyFitnessPal" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 p-4">
              <img src="/images/Strava.png" alt="Strava" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 p-4">
              <img src="/images/Peloton.svg" alt="Peloton" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg p-4">
              <p className="text-gray-600">And more</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Platforms;
  