
const DesignTools = () => {
    return (
        <div className="bg-black py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-4 lg:px-0">
                <div className="w-full max-w-4xl mb-8 flex items-center justify-center">
                    <video
                        className="w-full h-auto max-h-[500px] max-w-[400px] object-cover rounded-lg"
                        loop
                        muted
                        autoPlay
                        playsInline
                    >
                        <source src="videos/products.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Right: Text Section */}
                <div className="md:w-1/2 mt-10 md:mt-0 md:ml-12 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#00d61c]">
                    Simple Solutions for Lasting Wellness
                    </h2>
                    <p className="text-white mt-4">
                    We believe in pure, honest, and simple methods to improve your well-being.
                    </p>
                    <a
                        href="/all-products"
                        className="text-[#66ff00] hover:text-[#00d61c] font-medium mt-6 inline-block"
                    >
                        All products &rarr;
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DesignTools