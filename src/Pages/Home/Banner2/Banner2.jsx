// ProductGrid.js
import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/Image/img1.jpg";

const ProductCard = ({ image, title, subtitle }) => (
  <motion.div
    className="bg-gray-900 border border-green-500 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl flex-shrink-0 w-64"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 255, 0, 0.4)" }}
  >
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
    <h2 className="text-green-500 text-lg font-semibold">{title}</h2>
    <p className="text-gray-400 mt-2">{subtitle}</p>
  </motion.div>
);

const ProductGrid = () => {
  const products = [
    {
      image: img1,
      title: "Smart Bulb 10 W",
      subtitle: "Adjustable color and brightness",
    },
    {
      image: img1,
      title: "Smart Security Lock",
      subtitle: "Secure access with remote control",
    },
    {
      image: img1,
      title: "Smart Switch",
      subtitle: "Control appliances from your phone",
    },
    {
      image: img1,
      title: "Smart Video Door Bell",
      subtitle: "Monitor your door remotely",
    },
    {
      image: img1,
      title: "5-Pin Multi Socket",
      subtitle: "Multiple connections with safety",
    },
    {
      image: img1,
      title: "5-Pin Multi Socket",
      subtitle: "Multiple connections with safety",
    },
    {
      image: img1,
      title: "5-Pin Multi Socket",
      subtitle: "Multiple connections with safety",
    },
  ];

  return (
    <div className="bg-black py-10">
      <div className="text-center text-gray-200">
        <h1 className="text-3xl font-bold text-green-500 mb-2">Enjoy Our Wide Range Of Smart Devices</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover a world of convenience and possibilities as you explore our diverse selection of smart devices.
          From smart speakers to intelligent lighting, we have the perfect solutions to elevate your daily life.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto whitespace-nowrap px-4 mt-10">
        <div className="flex gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
