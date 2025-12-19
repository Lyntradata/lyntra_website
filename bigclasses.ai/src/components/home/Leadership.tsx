import React from 'react';

export default function CEOSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-xxl font-bold text-center mb-6 text-gray-1000">
        Leadership
      </h2>
      
      <div className="flex justify-center">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl w-full">
          <div className="flex">
            {/* Image - 50% */}
            <div className="w-1/2">
              <img
                src="/images/CEO.webp"
                alt="CEO"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Info - 50% */}
            <div className="w-1/2 flex flex-col justify-center p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-3">
                Bhanu prakash
              </h3>
              <p className="text-lg text-indigo-600 font-semibold">
                Founder & Chief Executive Officer of Lyntra Data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}