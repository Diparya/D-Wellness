"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  const [isVisible, setIsVisible] = useState({
    service1: false,
    service2: false,
    service3: false,
  });

  const service1Ref = useRef(null);
  const service2Ref = useRef(null);
  const service3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { target } = entry;
            if (target === service1Ref.current) {
              setIsVisible((prev) => ({ ...prev, service1: true }));
            } else if (target === service2Ref.current) {
              setIsVisible((prev) => ({ ...prev, service2: true }));
            } else if (target === service3Ref.current) {
              setIsVisible((prev) => ({ ...prev, service3: true }));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(service1Ref.current);
    observer.observe(service2Ref.current);
    observer.observe(service3Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-800 py-11">
      <div className="container mx-auto text-center px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* First Item */}
          <motion.div
            ref={service1Ref}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: -100 }}
            animate={isVisible.service1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.img
              src="/images/stress.svg"
              alt="Create custom products"
              className="w-32 h-32 mb-4"
              whileHover={{ scale: 1.1, y: -10 }}  // Hover effect for popping out
              transition={{ type: "spring", stiffness: 300 }}
            />
            <p className="text-xl font-semibold mb-2">Stress Relief Oils</p>
            <p className="text-gray-400">
            Experience calming aromatherapy with our soothing oils.
            </p>
            <button className="mt-4 bg-[#00d61c] hover:bg-[#66ff00] text-white py-2 px-4 rounded-lg">Learn More</button>
          </motion.div>

          {/* Second Item */}
          <motion.div
            ref={service2Ref}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: -100 }}
            animate={isVisible.service2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img
              src="/images/mindfulness .svg"
              alt="Sell on your terms"
              className="w-32 h-32 mb-4"
              whileHover={{ scale: 1.1, y: -10 }}  // Hover effect for popping out
              transition={{ type: "spring", stiffness: 300 }}
            />
            <p className="text-xl font-semibold mb-2">Mindfulness Classes</p>
            <p className="text-gray-400">
            Join our guided classes to cultivate mindfulness and inner peace.
            </p>
            <button className="mt-4 bg-[#00d61c] hover:bg-[#66ff00] text-white py-2 px-4 rounded-lg">Learn More</button>
          </motion.div>

          {/* Third Item */}
          <motion.div
            ref={service3Ref}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: -100 }}
            animate={isVisible.service3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.img
              src="/images/self-care.svg"
              alt="We handle fulfillment"
              className="w-32 h-32 mb-4"
              whileHover={{ scale: 1.1, y: -10 }}  // Hover effect for popping out
              transition={{ type: "spring", stiffness: 300 }}
            />
            <p className="text-xl font-semibold mb-2">Self-Care Kits</p>
            <p className="text-gray-400">
            Our curated kits offer everything you need for your personal wellness journey.
            </p>
            <button className="mt-4 bg-[#00d61c] hover:bg-[#66ff00] text-white py-2 px-4 rounded-lg">Learn More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;
