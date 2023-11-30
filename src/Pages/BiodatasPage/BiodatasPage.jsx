import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BiodatasPage = () => {
  const allBiodatas = useLoaderData();
  const{_id}=allBiodatas

  const [filteredBiodatas, setFilteredBiodatas] = useState(allBiodatas);
  const [filters, setFilters] = useState({
    age: { min: 18, max: 50 },
    biodataType: '',
    division: '',
  });

 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  useEffect(() => {
    const filtered = allBiodatas.filter((biodata) => {
      const ageInRange = biodata.age >= filters.age.min && biodata.age <= filters.age.max;
      const biodataTypeMatches = !filters.biodataType || biodata.biodataType === filters.biodataType;
      const divisionMatches = !filters.division || biodata.permanentDivision === filters.division;

      return ageInRange && biodataTypeMatches && divisionMatches;
    });

    setFilteredBiodatas(filtered);
    setCurrentPage(1); 
  }, [filters, allBiodatas]);

 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBiodatas.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex">
     
      <div className="w-1/4 p-4 bg-gray-100">
      
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Age Range</label>
          <input
            type="range"
            min="18"
            max="50"
            value={filters.age.min}
            onChange={(e) => setFilters({ ...filters, age: { ...filters.age, min: parseInt(e.target.value) } })}
          />
          <span className="ml-2">{filters.age.min} - {filters.age.max}</span>
        </div>

      
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Biodata Type</label>
          <select
            value={filters.biodataType}
            onChange={(e) => setFilters({ ...filters, biodataType: e.target.value })}
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

       
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Division</label>
          <select
            value={filters.division}
            onChange={(e) => setFilters({ ...filters, division: e.target.value })}
          >
            <option value="">All</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagram">Chattagram</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Maymansign">Maymansign</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Khulna">Khulna</option>
          </select>
        </div>
      </div>

     
      <div className="w-3/4 p-4">
        <h2 className="text-3xl font-semibold mb-6">All Biodatas</h2>
        {currentItems.map((biodata) => (
          <div key={biodata.biodataId} className="mb-8 p-6 bg-white rounded-md shadow-md">
            <div className="mb-4">
              <img className="inline-block h-12 w-12 rounded-full" src={biodata.profileImageLink} alt="Biodata" />
            </div>
            <p className="text-gray-700 mb-2">Biodata Id: {biodata.biodataId}</p>
            <p className="text-gray-700 mb-2">Biodata Type: {biodata.biodataType}</p>
            <p className="text-gray-700 mb-2">Permanent Division: {biodata.permanentDivision}</p>
            <p className="text-gray-700 mb-2">Age: {biodata.age}</p>
            <p className="text-gray-700 mb-2">Occupation: {biodata.occupation}</p>
            <Link to={`/memberdetail/${biodata._id}`}><button className="bg-emerald-500 text-white px-4 py-2 rounded-md">View Profile</button></Link>
          </div>
        ))}

       
        <div className="mt-4">
          <ul className="flex list-none p-0">
            {Array.from({ length: Math.ceil(filteredBiodatas.length / itemsPerPage) }).map((_, index) => (
              <li key={index} className="mr-2">
                <button
                  onClick={() => paginate(index + 1)}
                  className={`bg-gray-300 px-3 py-1 rounded-md ${
                    currentPage === index + 1 ? 'bg-gray-500 text-white' : ''
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BiodatasPage;
