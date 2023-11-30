import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Layout/Mainlayout';
import Home from './Home/Home';
import AuthProvider from './AuthProvider/Authprovider';
import Login from './AuthProvider/Login';
import Registration from './AuthProvider/Registration';
import Premiummmbr from './Pages/Premiummmbr/Premiummmbr';
import BiodatasPage from './Pages/BiodatasPage/BiodatasPage';
import Dashboard from './Dashboard/Dashboard';
import Editbiodata from './Dashboard/Editbiodata';
import MembersDetail from './Pages/BiodatasPage/MembersDetail';
import Manageruser from './Dashboard/Admin/Manageruser';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import Viewbiodata from './Dashboard/Viewbiodata';
import Checkout from './Pages/BiodatasPage/Checkout';
import Piechart from './Home/Piechart';
import ApprovedPremium from './Dashboard/ApprovedPremium';

import Req from './Dashboard/Admin/Req';
import Admindashboard from './Dashboard/Admin/Admindashboard';
import Userreq from './Dashboard/Userreq';
import Gotmarried from './Dashboard/Gotmarried';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import PrivateRout from './Layout/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
        loader:()=> fetch('https://metromony-server.vercel.app/members', {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
          }
      })
      },
      {
        path: "/",
        element:<Premiummmbr></Premiummmbr> ,
        loader:()=> fetch('https://metromony-server.vercel.app/members', {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
          }
      })
      },
      {
        path: "/biodatas",
        element: <BiodatasPage></BiodatasPage> ,
        loader:()=> fetch('https://metromony-server.vercel.app/members', {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
          }
      })
       
      },
      {
        path: "/memberdetail/:id",
        element: <PrivateRout><MembersDetail></MembersDetail></PrivateRout> ,
        loader: ({ params }) => fetch(`https://metromony-server.vercel.app/members/${params.id}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
  }
})
       
      },
      {
        path: "/login",
        element:<Login></Login> ,
      },
      {
        path: "/registration",
        element:<Registration></Registration> ,
      },
      {
        path: "/checkout",
        element:<Checkout></Checkout>,
      },
      {
        path: "/about",
        element:<AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element:<ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: 'dashboard',
    element:<PrivateRout><Dashboard></Dashboard></PrivateRout>,
    children:[
      {
        path:'editbiodata',
        element:<Editbiodata></Editbiodata>
      },
      {
        path:'viewbiodatas',
        element:<Viewbiodata></Viewbiodata>
      },
      {
        path: 'manageuser',
        element:<Manageruser></Manageruser>,
        
      },
      {
        path: 'piechart',
        element:<Piechart></Piechart>,
        
      },
      {
        path: 'approvepremium',
        element:<ApprovedPremium></ApprovedPremium>
        
      },
      {
        path: 'approvecontact',
        element:<Req></Req>
        
      },
      {
        path: 'admin',
        element:<Admindashboard></Admindashboard>
        
      },
      {
        path: 'userreq',
        element:<Userreq></Userreq>
        
      },
      {
        path: 'gotmarried',
        element:<Gotmarried></Gotmarried>
        
      },

    ]
  }
]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
  <div className='max-w-screen-xl m-auto'><QueryClientProvider client={queryClient}>
  <AuthProvider> <RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider></div>
  </React.StrictMode>,
)
