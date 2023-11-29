import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import usePremium from '../../Hook/usePremium';

const MembersDetail = () => {
  const memberId = useLoaderData(); // Assuming useLoaderData returns the member ID

  const [similarBiodata, setSimilarBiodata] = useState([]);
  const details = useLoaderData();
  const [isPremium, isPremiumLoading] = usePremium();
  const [contactRequested, setContactRequested] = useState(false);

  useEffect(() => {
    // Fetch all members to find similar biodata
    fetch('http://localhost:5000/members')
      .then((response) => response.json())
      .then((data) => {
        // Filter similar biodata based on gender
        const genderFilter = details?.biodataType === 'Male' ? 'Male' : 'Female';
        const filteredBiodata = data.filter((biodata) => biodata.biodataType === genderFilter && biodata._id !== memberId);
        setSimilarBiodata(filteredBiodata);
      })
      .catch((error) => console.error('Error fetching similar biodata:', error));
  }, [memberId, details]);

  if (!details || isPremiumLoading) {
    return <div>Loading...</div>;
  }

  const {
    biodataType,
    name,
    profileImageLink,
    dateOfBirth,
    height,
    weight,
    age,
    occupation,
    permanentDivision,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    contactEmail,
    mobileNumber,
  } = details;

  const handleRequestContactInfo = () => {
    // Logic to handle contact information request (e.g., show a modal or redirect to checkout page)
    setContactRequested(true);
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4 border border-gray-300">
        <h2 className="text-3xl font-semibold mb-4">{name}'s Biodata Details</h2>
        <img className="mb-4 rounded-full" src={profileImageLink} alt="Profile" />
        <p>Biodata Type: {biodataType}</p>
        <p>Date of Birth: {dateOfBirth}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Age: {age}</p>
        <p>Occupation: {occupation}</p>
        <p>Permanent Division: {permanentDivision}</p>
        <p>Expected Partner Age: {expectedPartnerAge}</p>
        <p>Expected Partner Height: {expectedPartnerHeight}</p>
        <p>Expected Partner Weight: {expectedPartnerWeight}</p>

        {/* Conditionally render contact information for premium users */}
        {isPremium && !contactRequested && (
          <div className="border-t mt-4 pt-4">
            <p className="font-semibold">Contact Information for Premium Users</p>
            <p className="mt-2">Email: {contactEmail}</p>
            <p className="mt-2">Phone: {mobileNumber}</p>
          </div>
        )}

        {!isPremium &&  (
          <div className="mt-4">
          <Link to={'/checkout'}> <button 
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handleRequestContactInfo}
            >
              Request Contact Information
            </button></Link>
          </div>
        )}
      </div>

      <div className="w-1/2 p-4">
        <h2 className="text-3xl font-semibold mb-4">Similar Biodata</h2>
        {similarBiodata.map((biodata) => (
          <Link key={biodata._id} to={`/memberdetail/${biodata._id}`}>
            <div className="mb-8 p-6 bg-white rounded-md shadow-md">
              <img className="inline-block h-12 w-12 rounded-full" src={biodata.profileImageLink} alt="Biodata" />
              <p className="text-gray-700 mb-2">Name: {biodata.name}</p>
              <p className="text-gray-700 mb-2">Biodata Type: {biodata.biodataType}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MembersDetail;
