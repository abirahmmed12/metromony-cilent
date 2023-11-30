import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';

const ViewBiodata = () => {
  const { user } = useContext(AuthContext);
  const [biodata, setBiodata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;

    const url = `https://metromony-server.vercel.app/biodatas?email=${user.email}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Biodata API Response:', data);
        setBiodata(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch biodata. Please try again later.');
        setLoading(false);
      });
  }, [user]);

  return (
    <div>
      {loading ? (
        <p>Loading biodata...</p>
      ) : (
        <div>
          {error ? (
            <p style={{ color: 'red' }}>{error}</p>
          ) : (
            <>
              <h2 className="text-4xl text-center">Your Biodata</h2>
              {Array.isArray(biodata) && biodata.length > 0 ? (
                biodata.map((entry) => (
                  <div key={entry._id} className="my-4 p-4 border border-gray-300 rounded">
                    <p className="text-2xl"><strong>Biodata Type:</strong> {entry.biodataType}</p>
                    <p className="text-2xl"><strong>Name:</strong> {entry.name}</p>
                    <p className="text-2xl"><strong>Profile Image:</strong> <img src={entry.profileImageLink} alt="Profile" className="max-w-full h-auto" /></p>
                    <p className="text-2xl"><strong>Date of Birth:</strong> {entry.dateOfBirth}</p>
                    <p className="text-2xl"><strong>Height:</strong> {entry.height}</p>
                    <p className="text-2xl"><strong>Weight:</strong> {entry.weight}</p>
                    <p className="text-2xl"><strong>Age:</strong> {entry.age}</p>
                    <p className="text-2xl"><strong>Occupation:</strong> {entry.occupation}</p>
                    <p className="text-2xl"><strong>Race:</strong> {entry.race}</p>
                    <p className="text-2xl"><strong>Father's Name:</strong> {entry.fathersName}</p>
                    <p className="text-2xl"><strong>Mother's Name:</strong> {entry.mothersName}</p>
                    <p className="text-2xl"><strong>Permanent Division:</strong> {entry.permanentDivision}</p>
                    <p className="text-2xl"><strong>Present Division:</strong> {entry.presentDivision}</p>
                    <p className="text-2xl"><strong>Expected Partner Age:</strong> {entry.expectedPartnerAge}</p>
                    <p className="text-2xl"><strong>Expected Partner Height:</strong> {entry.expectedPartnerHeight}</p>
                    <p className="text-2xl"><strong>Expected Partner Weight:</strong> {entry.expectedPartnerWeight}</p>
                    <p className="text-2xl"><strong>Contact Email:</strong> {entry.contactEmail}</p>
                    <p className="text-2xl"><strong>Mobile Number:</strong> {entry.mobileNumber}</p>
                  </div>
                ))
              ) : (
                <p className="text-4xl text-center">Hello {user?.displayName}, you haven't created any biodata yet.</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewBiodata;
