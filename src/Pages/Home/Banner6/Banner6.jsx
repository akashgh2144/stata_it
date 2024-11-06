import React from 'react';
import { FaLock, FaRocket, FaMicrochip, FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import img9 from '../../../assets/Image/img9.jpg';

const Banner6 = () => {
  return (
    <div className="bg-white p-8 text-gray-700">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-black mb-2">Smart Switch Features</h2>
        <p className="text-lg text-gray-600">
          Smart switches are a great way to add convenience and security to your home. With a smart switch, you can control your lights and appliances from anywhere, using your smartphone or voice assistant. You can also create schedules and automations to make your life easier.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center max-w-5xl mx-auto">
        
        {/* Left Features */}
        <div className="flex flex-col space-y-8 w-full md:w-1/3">
          <div className="text-center">
            <FaRocket className="text-2xl text-green-600 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-black">Remote Access</h3>
            <p className="text-gray-600">Control your STATA switch from any place around the world!</p>
          </div>

          <div className="text-center">
            <FaLock className="text-2xl text-green-600 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-black">Touch Control</h3>
            <p className="text-gray-600">Experience modern elegance and effortless functionality with our Touch Control switch technology.</p>
          </div>

          <div className="text-center">
            <FaMicrochip className="text-2xl text-green-600 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-black">Voice Control</h3>
            <p className="text-gray-600">All our switches are compatible with Google Home and Amazon Alexa Voice Assistant.</p>
          </div>
        </div>

        {/* Center Image */}
        <div className="w-full md:w-1/3 p-4 flex justify-center">
          <img
            src={img9} // Update with the correct path for your image
            alt="Smart Switch"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col space-y-8 w-full md:w-1/3">
          <div className="text-center">
            <AiOutlineMobile className="text-2xl text-green-600 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-black">StataLife App Control</h3>
            <p className="text-gray-600">Transform your living space into a hub of convenience and innovation with StataLife smarthome App Control.</p>
          </div>

          <div className="text-center">
            <BsClockHistory className="text-2xl text-green-600 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-black">Set Timer</h3>
            <p className="text-gray-600">Set a timer on your switch to automate your lights and save energy.</p>
          </div>

          <div className="text-center">
            <FaCalendarAlt className="text-2xl text-green-600 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-black">Set Schedule & Routine</h3>
            <p className="text-gray-600">Easily schedule device usage by setting a timer on your switch for added convenience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner6;
