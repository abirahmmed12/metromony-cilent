import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';

const ApprovedPremium = () => {
    const [manageuser, setManageuser] = useState([]);
    const [premiumLoading, setPremiumLoading] = useState(false);

    useEffect(() => {
        // Fetch data from the API endpoint
        fetch('https://metromony-server.vercel.app/members', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                // Update the state with the fetched data
                setManageuser(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleMakePremium = async (user) => {
        try {
            setPremiumLoading(true);

            const response = await fetch(`https://metromony-server.vercel.app/members/premium/${user._id}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error making user premium: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Acknowledgment:', data.acknowledge);
            console.log('Modified Count:', data.modifiedCount);

            const userDataResponse = await fetch('https://metromony-server.vercel.app/members', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
                },
            });

            if (!userDataResponse.ok) {
                throw new Error(`Error fetching updated data: ${userDataResponse.statusText}`);
            }

            const updatedUserData = await userDataResponse.json();
            setManageuser(updatedUserData);

            alert('User has been made premium.');
        } catch (error) {
            console.error('Error:', error.message);
        } finally {
            setPremiumLoading(false);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <div className="overflow-x-auto">
                <table className="user-table min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-slate-300 text-center">S.No</th>
                            <th className="py-2 px-4 bg-slate-300 text-left">User Name</th>
                            <th className="py-2 px-4 bg-slate-300 text-left">User Email</th>
                            <th className="py-2 px-4 bg-slate-300 text-left">Make Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manageuser.map((user, index) => (
                            <tr key={user._id}>
                                <td className="py-2 px-4 text-center">{index + 1}</td>
                                <td className="py-2 px-4">{user.name}</td>
                                <td className="py-2 px-4">{user.contactEmail}</td>
                                <td className="py-2 px-4">
                                    {user.role2 === 'premium' ? (
                                        'Premium'
                                    ) : (
                                        <button
                                            onClick={() => handleMakePremium(user)}
                                            className={`bg-blue-500 flex items-center text-white px-2 py-1 rounded ${premiumLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={premiumLoading}
                                        >
                                            <FaUser />
                                            Make Premium
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApprovedPremium;
