"use client";
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

const Offers = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position tracking for rotation effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 300], [15, -15]);
  const rotateY = useTransform(x, [0, 300], [-15, 15]);

  return (
    <div className="bg-gray-500 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        
        {/* Left side */}
        <motion.div
          className="profit-card bg-gray-800 text-white p-8 rounded-lg shadow-md md:w-1/2"
          style={{ perspective: 1000 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            x.set(event.clientX - rect.left);
            y.set(event.clientY - rect.top);
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }, // Ease-in-out for smoother transition
          }}
        >
          <motion.div
            className="inner-content"
            style={{
              rotateX: isHovered ? rotateX : 0,
              rotateY: isHovered ? rotateY : 0,
              transition: { type: 'spring', stiffness: 150, damping: 20 }, // Lower stiffness and higher damping for smoother effect
            }}
          >
            <h2 className="text-2xl font-bold mb-4">Rejuvenate Your Mind and Body</h2>
            <p className="text-lg mb-6">
            Experience holistic wellness with our personalized self-care kit. Designed to calm your mind, soothe your body, and energize your spirit.
            </p>
            <div className="bg-gray-900 p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-2">
                <span>Mindfulness Guidebook</span>
                <span>$25</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Aromatherapy Essential Oils</span>
                <span>$15</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Relaxing Herbal Tea Blend</span>
                <span>$10</span>
              </div>
              <hr className="border-gray-600 mb-2" />
              <div className="flex justify-between text-[#00d61c] font-semibold">
                <span>Exclusive Wellness Package</span>
                <span>$45</span>
              </div>
            </div>
            <button className="bg-[#00d61c] hover:bg-[#66ff00] text-white py-2 px-6 rounded-lg">
            Order Your Kit
            </button>
            <p className="text-gray-400 text-sm mt-4">
            Free Shipping · 100% Natural Products · Limited Edition
            </p>
          </motion.div>
        </motion.div>

        {/* Right side - Video section */}
        <div className="bg-black w-80 h-80 -rotate-6 relative rounded-lg mt-9">
          <div className="w-full max-w-4xl mb-8 flex items-center justify-center absolute rotate-12">
            <video
              className="w-full h-auto max-h-[300px] max-w-[300px] object-cover rounded-lg"
              loop
              muted
              autoPlay
              playsInline
            >
              <source src="videos/kit.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
