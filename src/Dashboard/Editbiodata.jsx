import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/Authprovider';

const EditBiodata = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    biodataId: null,
    biodataType: 'Male',
    name: '',
    profileImageLink: '',
    dateOfBirth: '',
    height: '',
    weight: '',
    age: '',
    occupation: '',
    race: '',
    fathersName: '',
    mothersName: '',
    permanentDivision: '',
    presentDivision: '',
    expectedPartnerAge: '',
    expectedPartnerHeight: '',
    expectedPartnerWeight: '',
    contactEmail: user?.email,
    mobileNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Your Request has been sent',
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
      console.log(handleSubmit)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-6">Member Information</h1>
          <div className="grid grid-cols-2 gap-2">
           

          <label className="block text-gray-700 text-sm font-bold mb-2">Bio Data Type</label>
<select
  name="biodataType"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  required
  value={formData.biodataType}
  onChange={handleChange}
>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select>


            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Profile Image Link</label>
            <input
              type="text"
              name="profileImageLink"
              placeholder="Img URL"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.profileImageLink}
              onChange={handleChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Date Of Birth</label>
            <input
              type="datetime-local"
              name="dateOfBirth"
              placeholder="Date Of Birth"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.dateOfBirth}
              onChange={handleChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Height</label>
            <input
              type="text"
              name="height"
              placeholder="Height"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.height}
              onChange={handleChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Weight</label>
            <textarea
              name="weight"
              placeholder="Weight"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.weight}
              onChange={handleChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
            <input
              type="text"
              name="age"
              placeholder="Age"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.age}
              onChange={handleChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Occupation</label>
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.occupation}
              onChange={handleChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Race</label>
            <input
              type="text"
              name="race"
              placeholder="Race"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.race}
              onChange={handleChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Father's Name</label>
            <input
              type="text"
              name="fathersName"
              placeholder="Father's Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.fathersName}
              onChange={handleChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Mother's Name</label>
            <input
              type="text"
              name="mothersName"
              placeholder="Mother's Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.mothersName}
              onChange={handleChange}
            />

           
<label className="block text-gray-700 text-sm font-bold mb-2">Permanent Division</label>
<select
  name="permanentDivision"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  required
  value={formData.permanentDivision}
  onChange={handleChange}
>
  <option value="Dhaka">Dhaka</option>
  <option value="Chattagram">Chattagram</option>
  <option value="Rangpur">Rangpur</option>
  <option value="Barisal">Barisal</option>
  <option value="Khulna">Khulna</option>
  <option value="Maymansign">Maymansign</option>
  <option value="Sylhet">Sylhet</option>
</select>

<label className="block text-gray-700 text-sm font-bold mb-2">Present Division</label>
<select
  name="presentDivision"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  required
  value={formData.presentDivision}
  onChange={handleChange}
>
  <option value="Dhaka">Dhaka</option>
  <option value="Chattagram">Chattagram</option>
  <option value="Rangpur">Rangpur</option>
  <option value="Barisal">Barisal</option>
  <option value="Khulna">Khulna</option>
  <option value="Maymansign">Maymansign</option>
  <option value="Sylhet">Sylhet</option>
</select>
            <label className="block text-gray-700 text-sm font-bold mb-2">Expected Partner Age</label>
            <input
              type="text"
              name="expectedPartnerAge"
              placeholder="Expected Partner Age"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.expectedPartnerAge}
              onChange={handleChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Expected Partner Height</label>
            <input
              type="text"
              name="expectedPartnerHeight"
              placeholder="Expected Partner Height"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.expectedPartnerHeight}
              onChange={handleChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Expected Partner Weight</label>
            <input
              type="text"
              name="expectedPartnerWeight"
              placeholder="Expected Partner Weight"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.expectedPartnerWeight}
              onChange={handleChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Contact Email</label>
            <input
              type="email"
              name="contactEmail"
              placeholder="Contact Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={user?.email}
              onChange={handleChange}
              readOnly
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
            <input
              type="number"
              name="mobileNumber"
              placeholder="Mobile Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBiodata;
