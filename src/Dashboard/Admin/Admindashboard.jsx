import React, { useState, useEffect } from 'react';

const Admindashboard = () => {
  const [biodataCounts, setBiodataCounts] = useState({
    total: 0,
    male: 0,
    female: 0,
    premium: 0,
  });

  useEffect(() => {
    // Fetch data from the API
    fetch('https://metromony-server.vercel.app/members')
      .then(response => response.json())
      .then(data => {
        // Calculate counts based on biodataType and role2
        const totalBiodataCount = data.length;
        const maleBiodataCount = data.filter(member => member.biodataType === 'Male').length;
        const femaleBiodataCount = data.filter(member => member.biodataType === 'Female').length;
        const premiumBiodataCount = data.filter(member => member.role2 === 'premium').length;

        // Update the state with the counts
        setBiodataCounts({
          total: totalBiodataCount,
          male: maleBiodataCount,
          female: femaleBiodataCount,
          premium: premiumBiodataCount,
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-100">
    <img className="absolute top-0 h-full w-full object-cover object-center opacity-30" src="/images/ZbQYxs58uj_TXVLLRtSaa.png" />
  
    <div className="bg-white/60 relative mx-auto flex h-full w-full flex-col items-center justify-center px-4 py-12 backdrop-blur-md sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <h2 className="-mx-4 px-4 pt-4 pb-6 text-3xl text-blue-600 sm:text-4xl xl:text-5xl">Our <span className="font-bold">Growth</span></h2>
  
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-y-4 gap-x-8 text-center sm:mt-12 sm:text-left md:grid-cols-3">
        <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
          <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">{biodataCounts.total}</p>
          <p className="relative mt-5 text-gray-600">Total</p>
        </div>
  
        <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
          <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">{biodataCounts.male}</p>
          <p className="relative mt-5 text-gray-600">Male Members</p>
        </div>
  
        <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
          <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">{biodataCounts.female}</p>
          <p className="relative mt-5 text-gray-600">Femal Members</p>
        </div>
        <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
          <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">{biodataCounts.premium}</p>
          <p className="relative mt-5 text-gray-600">Premium Members</p>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Admindashboard;
