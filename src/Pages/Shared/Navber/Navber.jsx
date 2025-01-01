import React from 'react';
import logo from '../../../assets/Image/logo.jpeg';
import { navdata } from '../../../Utils/navlink';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
        <nav className="bg-gradient-to-r from-black to-green-700 shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto"
          />
          <span className="text-white font-bold text-xl">STATA</span>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">

          {navdata.map(item=> <Link to={item.path}key={item.title}>{item.title}</Link>)}
          
        {/* <a href="#" className="text-gray-200 hover:text-green-300 nav-link">
            Home
          </a>
          <a href="#" className="text-gray-200 hover:text-green-300">
            Shop
          </a>  
          <a href="#Feature" className="text-gray-200 hover:text-green-300">
            Features
          </a>
          <a href="#Support" className="text-gray-200 hover:text-green-300">
            Support
          </a>
          <a href="#" className="text-gray-200 hover:text-green-300">
            Contact
          </a>
          <a href="#" className="text-gray-200 hover:text-green-300">
            Home Automation
          </a>
          <a href="#" className="text-gray-200 hover:text-green-300">
            Hotel Automation
          </a>
          <a href="#" className="text-gray-200 hover:text-green-300">
            Industry/Office Automation
          </a> */}
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600"
          >
            CREATE OWN DESIGN
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-200 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>


        </div>
    );
};

export default Navber;
