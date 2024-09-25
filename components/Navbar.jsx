"use client"
import { useState } from 'react';

const Navbar = () => {
  // State to manage the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-[#0c0420] shadow-sm py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <div className="text-[#66ff00] font-bold text-lg cursor-pointer">D-Wellness</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">Meditation</a>
        <a href="#" className="text-white">Self-Care Kits</a>
        <a href="#" className="text-white">Workshops</a>
        <a href="#" className="text-white">Blog</a>
        <a href="#" className="text-white">About Us</a>
        <a href="#" className="text-white">Contact</a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            className="text-[#66ff00]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="text-white">Log in</button>
        <button className="bg-[#66ff00] text-white px-4 py-2 rounded">Sign up</button>
      </div>

      {/* Mobile Menu (shown when isOpen is true) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0c0420] flex flex-col space-y-4 py-4 px-8 md:hidden">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Meditation</a>
          <a href="#" className="text-white">Self-Care Kits</a>
          <a href="#" className="text-white">Workshops</a>
          <a href="#" className="text-white">Blog</a>
          <a href="#" className="text-white">About Us</a>
          <a href="#" className="text-white">Contact</a>
          <div className="flex space-x-4">
            <button className="text-white">Log in</button>
            <button className="bg-[#66ff00] text-white px-4 py-2 rounded">Sign up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
