import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";
import useAdmin from "../Hook/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignout = () => {
    logOut().then().catch();
  };
  const [isadmin] = useAdmin()

  const Navlinks = (
    <>
      <li className="text-white font-bold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
    
      {user && (
      <li className="text-white font-bold">
        {/* Check if the user is an admin */}
        {isadmin ? (
          <NavLink to={"/dashboard/admin"}>Dashboard</NavLink>
        ) : (
          <NavLink to={"/dashboard/editbiodata"}>Dashboard</NavLink>
        )}
      </li>
    )}
     

      <li className="text-white font-bold">
        <NavLink to={"/biodatas"}>Biodatas</NavLink>
      </li>
      <li className="text-white font-bold">
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li className="text-white font-bold">
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>

     
     
      {!user && (
        <li className="text-white font-bold">
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      )}
    </>
  );

  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const openNav = () => {
    setSideNavOpen(true);
  };

  const closeNav = () => {
    setSideNavOpen(false);
  };

  return (
    <div className="bg-gray-800 ">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <button className="text-white text-2xl lg:hidden" onClick={openNav}>
            &#9776;
          </button>
          <Link to="/">
           <div className="flex items-center">
           <span className="text-white text-2xl hidden lg:inline">
            SoulMateSearch
            </span>
            <img className="h-20" src="https://i.ibb.co/xfr0t5K/pngwing-com-1.png" alt="" />
           </div>
          </Link>
        </div>

        <div className={`lg:hidden ${isSideNavOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col items-end bg-gray-800 absolute top-0 right-0 h-screen w-60 p-4">
            {Navlinks}
          </ul>
          <button
            className="text-white text-2xl absolute top-4 right-4"
            onClick={closeNav}
          >
            &times;
          </button>
        </div>

        <div className="hidden lg:flex flex-grow items-center justify-end">
          <ul className="flex space-x-4">{Navlinks}</ul>
          {user && (
            <div className="flex items-center ml-4">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Icon"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <img
                  src="https://i.ibb.co/QmgzZ1N/Sample-User-Icon.png"
                  alt="Default User Icon"
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-white text-sm ml-2 lg:text-lg">
                {user.displayName || user.email}
              </span>
              <button
                onClick={handleSignout}
                className="ml-4 bg-black text-white px-3 py-1 rounded hover:bg-blue-100"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
