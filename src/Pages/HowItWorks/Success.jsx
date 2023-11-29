import React from 'react';

const Success = () => {
  // Assume these values are fetched from your database or backend
  const totalBiodatas = 1500;
  const girlsBiodatas = 700;
  const boysBiodatas = 800;
  const totalMarriages = 300;

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Success Counter</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-around mb-12">
          <div className="mb-6 md:mb-0">
            <div className="text-4xl font-bold text-emerald-500 mb-3">{totalBiodatas}</div>
            <p className="text-gray-700">Total Biodatas</p>
          </div>
          <div className="mb-6 md:mb-0">
            <div className="text-4xl font-bold text-emerald-500 mb-3">{girlsBiodatas}</div>
            <p className="text-gray-700">Girls Biodatas</p>
          </div>
          <div className="mb-6 md:mb-0">
            <div className="text-4xl font-bold text-emerald-500 mb-3">{boysBiodatas}</div>
            <p className="text-gray-700">Boys Biodatas</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-500 mb-3">{totalMarriages}</div>
            <p className="text-gray-700">Completed Marriages</p>
          </div>
        </div>

        <p className="text-gray-600">
          Join the success stories and be a part of our growing community!
        </p>
      </div>
    </section>
  );
};

export default Success;
