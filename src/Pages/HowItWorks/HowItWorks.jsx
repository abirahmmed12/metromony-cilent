import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
        <p className="text-gray-600 mb-8">
          Discovering true connections is easy with our user-friendly platform. Follow these simple steps to find your perfect match:
        </p>

        <div className="flex flex-col md:flex-row items-center justify-around mb-12">
          <div className="mb-6 md:mb-0">
            <div className="text-4xl font-bold text-emerald-500 mb-3">1</div>
            <p className="text-gray-700">Create Your Profile</p>
            <p className="text-sm text-gray-500">Sign up and build your profile to showcase your personality and preferences.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <div className="text-4xl font-bold text-emerald-500 mb-3">2</div>
            <p className="text-gray-700">Explore Biodata</p>
            <p className="text-sm text-gray-500">Browse through premium member biodatas to find potential matches.</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-500 mb-3">3</div>
            <p className="text-gray-700">Connect and Contact</p>
            <p className="text-sm text-gray-500">Contact the biodatas you prefer and start your journey towards a meaningful connection.</p>
          </div>
        </div>

        <p className="text-gray-600">
          Join us today and embark on the exciting journey of finding your perfect partner.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
