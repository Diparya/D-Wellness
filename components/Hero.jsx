const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 text-center px-4">
      <h1 className="text-2xl md:text-4xl font-bold text-[#00d61c] mb-4">Nurture Your Body, Mind, and Soul</h1>
      <p className="text-white mb-8">Discover holistic wellness products and services designed to support your well-being.</p>

      <div className="w-full max-w-4xl mb-8 flex items-center justify-center shadow-md shadow-[#66ff00]">
        <video
          className="w-full h-auto max-h-[700px] max-w-[700px] object-cover rounded-lg"
          loop
          muted
          autoPlay
          playsInline
        >
          <source src="videos/wellness.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-12">
        <button className="bg-[#00d61c] text-white px-6 py-3 rounded font-medium border border-[#66ff00] hover:bg-black hover:text-[#66ff00] hover:border-[#66ff00] hover:border">Start for free</button>
        <button className="flex items-center space-x-2 text-[#66ff00] border border-[#66ff00] px-6 py-3 rounded font-medium mt-4 md:mt-0 hover:text-white hover:bg-[#66ff00]">
          <span>How it works?</span>
        </button>
      </div>


    </div>
  );
};

export default Hero;
