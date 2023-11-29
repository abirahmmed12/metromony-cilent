import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";

const Viewbiodata = () => {
    const { user } = useContext(AuthContext);
    const [biodata, setBiodata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user) return;

        const url = `http://localhost:5000/biodatas?email=${user.email}`;

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
                                    <div key={entry._id}>
                                        <p className="text-4xl text-center"><strong>Name:</strong> {entry.name}</p>
                                        <p className="text-4xl text-center"><strong>Date of Birth:</strong> {entry.dateOfBirth}</p>
                                        {/* ... (rest of the biodata fields) */}
                                    </div>
                                ))
                            ) : (
                                <p className="text-4xl text-center">Helleo {user?.displayName
                                }  you didnt create any biodata yet</p>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Viewbiodata;
