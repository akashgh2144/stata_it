import React from 'react';
import KUET from '../../../assets/Image/KUET.png';
import ROBI from '../../../assets/Image/ROBI.png';
import radisson from '../../../assets/Image/radisson.png';
import Batlogo from '../../../assets/Image/Batlogo.png';
import Rancon from '../../../assets/Image/Rancon.png'
const brands = [
  { name: 'KUET', logo: KUET },
  { name: 'ROBI', logo: ROBI },
  
  { name: 'radisson', logo: radisson },
  { name: 'Batlogo', logo: Batlogo },
  
  { name: 'Rancon', logo: Rancon },
  
];

const Banner7 = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">OUR HAPPY CUSTOMER</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg flex items-center justify-center p-6 hover:shadow-lg transition-shadow"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>

      <button className="text-sm font-medium text-gray-800 border border-gray-400 rounded-full py-2 px-6 hover:bg-gray-200 transition-colors">
        View All
      </button>
    </div>
  );
};

export default Banner7;
