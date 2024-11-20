"use client";
import React, { useState } from "react";

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form Submitted!");
    setFormData({
        name: "",
        age: "",
        file: null,
      })
  };

  return (
    <div className="bg-gray-800 py-16">
      <div className="container mx-auto text-center px-4 lg:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00d61c] mb-4">
          Healthcare Information Form
        </h2>
        <p className="text-gray-300 mb-6">
          Please fill in your details to get started with our personalized healthcare solutions.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-700 p-6 rounded-lg shadow-md max-w-md mx-auto"
        >
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d61c]"
              required
            />
          </div>

          {/* Age Input */}
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-300 mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d61c]"
              required
            />
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label htmlFor="file" className="block text-gray-300 mb-2">
              Upload File (e.g., Medical Report)
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 text-gray-300 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d61c]"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#00d61c] hover:bg-[#66ff00] text-white py-2 px-6 rounded-lg font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
