import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MemberCards from './memberCards';

const Premiummmbr = () => {
    const allMembers = useLoaderData();

   
    const premiumMembers = allMembers.filter(member => member.role2 === 'premium');

    return (
        <div className='grid lg:grid-cols-2'>
           {
            premiumMembers.map(member => <MemberCards key={member._id} members={member}></MemberCards>)
           }
        </div>
    );
};

export default Premiummmbr;
