import React, { useState } from 'react';

const Gotmarried = () => {
  const [formData, setFormData] = useState({
    selfBiodataNumber: '',
    partnerBiodataNumber: '',
    coupleImageLink: '',
    successStory: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    setFormData({
      selfBiodataNumber: '',
      partnerBiodataNumber: '',
      coupleImageLink: '',
      successStory: '',
    });

   
    alert('Form submitted successfully!');
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6">Got Married Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Self Biodata Number</label>
          <input
            type="text"
            name="selfBiodataNumber"
            placeholder="Enter Self Biodata Number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.selfBiodataNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Partner Biodata Number</label>
          <input
            type="text"
            name="partnerBiodataNumber"
            placeholder="Enter Partner Biodata Number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.partnerBiodataNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Couple Image Link</label>
          <input
            type="text"
            name="coupleImageLink"
            placeholder="Enter Couple Image Link"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.coupleImageLink}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Success Story Review</label>
          <textarea
            name="successStory"
            placeholder="Share your feelings about using this website..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.successStory}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Gotmarried;
