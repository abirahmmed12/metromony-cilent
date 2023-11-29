import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';
import useAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const usePremium = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: ispremium, isPending: ispremiumLoading } = useQuery({
        queryKey: [user?.email, 'ispremium'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is premium', user);
            const res = await axiosSecure.get(`/members/premium/${user.email}`);
            // console.log(res.data);
            return res.data?.premium;
        }
    });
    return [ispremium, ispremiumLoading];
};

export default usePremium;
