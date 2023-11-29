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

const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
        loader:()=> fetch('http://localhost:5000/members', {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
          }
      })
      },
      {
        path: "/",
        element:<Premiummmbr></Premiummmbr> ,
        loader:()=> fetch('http://localhost:5000/members', {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
          }
      })
      },
      {
        path: "/biodatas",
        element: <BiodatasPage></BiodatasPage> ,
        loader:()=> fetch('http://localhost:5000/members', {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
          }
      })
       
      },
      {
        path: "/memberdetail/:id",
        element: <MembersDetail></MembersDetail> ,
        loader: ({ params }) => fetch(`http://localhost:5000/members/${params.id}`, {
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
    ],
  },
  {
    path: 'dashboard',
    element:<Dashboard></Dashboard>,
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
        
      }

    ]
  }
]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
  <QueryClientProvider client={queryClient}>
  <AuthProvider> <RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
