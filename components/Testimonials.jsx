"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2, // Stagger the cards by 0.2s
            duration: 0.5,
        },
    }),
};

const Testimonials = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,  // Trigger animation only once
        threshold: 0.2,     // Trigger when 20% of the component is in view
    });

    return (
        <div className="bg-black py-16" ref={ref}>
            <div className="container mx-auto text-center px-4 md:px-0">
                <h2 className="text-3xl font-bold text-[#00d61c] mb-6">
                Trusted by over 8M wellness seekers worldwide
                </h2>
                <p className="text-gray-400 mb-8">
                Whether you're beginning your wellness journey or seeking advanced holistic care, we are here to support your physical, mental, and emotional well-being every step of the way.
                </p>

                {/* Testimonials Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* First Testimonial */}
                    <motion.div
                        className="p-6 bg-gray-200 rounded-lg shadow-md"
                        custom={0}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05 }} // Zoom effect on hover
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src="/images/robert-profile.jpg" // Replace with actual profile image
                                alt="Robert A. Voltaire"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div className='flex flex-col justify-center items-start'>
                                <h3 className="text-lg font-semibold text-black">Robert A. Voltaire</h3>
                                <p className="text-[#66ff00] text-sm">32, Busy Professional</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">
                        After years of struggling with stress and anxiety, I finally decided to try the products from Wellness Brand. The transformation has been life-changing. The stress relief oils have become a staple in my daily routine, and every time I use them, I feel like I'm giving myself a little moment of peace and calm. It's like I can finally breathe again. The oils, combined with the mindfulness classes, have not only helped me manage my stress but also taught me how to approach each day with a sense of balance. I can't recommend these enough.
                        </p>
                        <div className="flex">
                            <span className="text-yellow-500">★★★★★</span>
                        </div>
                    </motion.div>

                    {/* Second Testimonial */}
                    <motion.div
                        className="p-6 bg-gray-200 rounded-lg shadow-md"
                        custom={1}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05 }} // Zoom effect on hover
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src="/images/quinten-profile.webp" // Replace with actual profile image
                                alt="Quinten Barney"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div className='flex flex-col justify-center items-start'>
                                <h3 className="text-lg font-semibold text-black">Quinten Barney</h3>
                                <p className="text-[#66ff00] text-sm">27, Student</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">
                        As someone who has always struggled to maintain a consistent wellness routine, I was skeptical at first. But Wellness Brand’s self-care kits changed everything for me. The kits are thoughtfully curated, and they make self-care so easy and accessible. My favorite part is the personal journal that comes with it. It helped me reconnect with myself on a deeper level, and now, I dedicate time each week for a full self-care ritual. The products feel luxurious but are also grounded in simplicity and natural ingredients. I feel rejuvenated after every use, and I now look forward to taking care of myself.
                        </p>
                        <div className="flex">
                            <span className="text-yellow-500">★★★★★</span>
                        </div>
                    </motion.div>

                    {/* Third Testimonial */}
                    <motion.div
                        className="p-6 bg-gray-200 rounded-lg shadow-md"
                        custom={2}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05 }} // Zoom effect on hover
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src="/images/nikki-profile.jpg" // Replace with actual profile image
                                alt="Nikki"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div className='flex flex-col justify-center items-start'>
                                <h3 className="text-lg font-semibold text-black">Nikki</h3>
                                <p className="text-[#66ff00] text-sm">45, Entrepreneur</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">
                        Wellness Brand has been a game changer for my mental and physical health. I started using their mindfulness services a few months ago, and the impact has been profound. I’ve always had trouble quieting my mind, especially at night. After attending their guided mindfulness classes, I’ve learned techniques that help me stay present, reduce anxiety, and even improve my sleep. The instructors are compassionate, patient, and truly invested in your well-being. It’s not just a service; it’s a community that genuinely cares about helping you thrive.
                        </p>
                        <div className="flex">
                            <span className="text-yellow-500">★★★★★</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
