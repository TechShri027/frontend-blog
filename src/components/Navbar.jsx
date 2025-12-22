// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Navbar() {
//   const { currentUser, logout } = useAuth();
//   const navigate = useNavigate();
  
//   const isAdmin = currentUser?.role === "admin";

//   const logoutHandler = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <Link to="/" className="text-xl font-bold tracking-wide">
//           MyBlog
//         </Link>

//         <div className="flex items-center gap-6">
//           <Link to="/" className="text-gray-300 hover:text-white transition">
//             Blogs
//           </Link>

//           {!isAdmin && (
//             <Link
//               to="/login"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
//             >
//               Admin Login
//             </Link>
//           )}

//           {isAdmin && (
//             <>
//               <Link
//                 to="/dashboard"
//                 className="text-gray-300 hover:text-white transition"
//               >
//                 Dashboard
//               </Link>

//               <button
//                 onClick={logoutHandler}
//                 className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  
  const isAdmin = currentUser?.role === "admin";

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wide">
          MyBlog
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-300 hover:text-white transition">
            Blogs
          </Link>

          {!isAdmin && (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              Admin Login
            </Link>
          )}

          {isAdmin && (
            <>
              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-white transition"
              >
                Dashboard
              </Link>

              <button
                onClick={logoutHandler}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
