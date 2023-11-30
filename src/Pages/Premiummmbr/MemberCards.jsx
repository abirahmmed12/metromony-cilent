import React from 'react';
import { Link } from 'react-router-dom';

const MemberCards = (members) => {
    const {age,
        biodataId,
        biodataType,
        occupation,
        permanentDivision,
       _id,

        profileImageLink,
     }=members.members
    
    return (
        <section className="">
         
  
        <div className="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
          <div className="relative flex md::h-96 md::flex-col text-gray-600 md:flex-row">
            <div className="relative p-8 md:w-4/6"> 
              <div className="flex flex-col md:flex-row">
                <h2 className="m-auto ">Biodata Id:{biodataId}</h2>
               
              </div>
              <p className="mt-3 font-sans text-xl font-black  tracking-normal">Age: {age}</p>
              <div className="flex flex-col md:flex-row md:items-end">
                <p className="mt-6 text-xl font-black"> Biodata Type: { biodataType}<sup className="align-super text-sm"></sup></p>
                
              </div>
              <span className=" text-xl font-black uppercase">From: {permanentDivision}</span>
              <h1 className=" text-xl font-black uppercase">Occupation:  {occupation}</h1>
              <div className="mt-8 flex flex-col sm:flex-row">
               <Link  to={`/memberdetail/${_id}`}> <button className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-emerald-400 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500">
                  
                  View Profile
                </button></Link>
                
              </div>
            </div>
            <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
              <img className="block h-72 max-w-full rounded-md shadow-lg" src={
profileImageLink} />
            </div>
          </div>
        </div>
        
        </section>
    );
};

export default MemberCards;