import React, { useState, useEffect } from 'react';

const Success = () => {
  const [biodataCounts, setBiodataCounts] = useState({
    totalBiodatas: 0,
    girlsBiodatas: 0,
    boysBiodatas: 0,
    premiumBiodatas: 0,
  });

  useEffect(() => {
   
    fetch('https://metromony-server.vercel.app/members')
      .then(response => response.json())
      .then(data => {
       
        const totalBiodataCount = data.length;
        const girlsBiodataCount = data.filter(member => member.biodataType === 'Female').length;
        const boysBiodataCount = data.filter(member => member.biodataType === 'Male').length;
        const premiumBiodataCount = data.filter(member => member.role2 === 'premium').length;

        setBiodataCounts({
          totalBiodatas: totalBiodataCount,
          girlsBiodatas: girlsBiodataCount,
          boysBiodatas: boysBiodataCount,
          premiumBiodatas: premiumBiodataCount,
        });
      })
      .catch(error => {
        console.error('Error fetching biodata counts:', error);
      });
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Success Counter</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-around mb-12">
          <div className="mb-6 md:mb-0">
            <div className="text-4xl font-bold text-emerald-500 mb-3">{biodataCounts.totalBiodatas}</div>
            <p className="text-gray-700">Total Biodatas</p>
          </div>
          <div className="mb-6 md:mb-0">
            <div className="text-4xl font-bold text-emerald-500 mb-3">{biodataCounts.girlsBiodatas}</div>
            <p className="text-gray-700">Girls Biodatas</p>
          </div>
          <div className="mb-6 md:mb-0">
            <div className="text-4xl font-bold text-emerald-500 mb-3">{biodataCounts.boysBiodatas}</div>
            <p className="text-gray-700">Boys Biodatas</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-500 mb-3">{biodataCounts.premiumBiodatas}</div>
            <p className="text-gray-700">Premium Biodatas</p>
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
