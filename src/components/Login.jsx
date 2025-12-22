// import { useState } from "react";
// import API from "../services/api";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Login() {
//   const [data, setData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { login: authLogin } = useAuth();

//   const login = async () => {
//     try {
//       const res = await API.post("/auth/login", data);
      
//       // Update global auth state
//       authLogin(res.data.user, res.data.token);

//       // Navigate based on role
//       if (res.data.user.role === "admin") {
//         navigate("/admin"); // admin dashboard
//       } else {
//         navigate("/"); // normal user
//       }

//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Admin Login
//         </h2>

//         {error && (
//           <p className="text-red-500 text-sm mb-3">{error}</p>
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-4 border px-4 py-2 rounded-md"
//           onChange={e =>
//             setData({ ...data, email: e.target.value })
//           }
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-6 border px-4 py-2 rounded-md"
//           onChange={e =>
//             setData({ ...data, password: e.target.value })
//           }
//         />

//         <button
//           onClick={login}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
//         >
//           Login
//         </button>

//         <p className="text-sm text-center mt-4">
//           New admin?{" "}
//           <Link to="/signup" className="text-blue-600">
//             Create account
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const login = async () => {
    try {
      const res = await API.post("/auth/login", data);
      
      // Update global auth state
      authLogin(res.data.user, res.data.token);

      // Navigate based on role
      if (res.data.user.role === "admin") {
        navigate("/admin"); // admin dashboard
      } else {
        navigate("/"); // normal user
      }

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 border px-4 py-2 rounded-md"
          onChange={e =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 border px-4 py-2 rounded-md"
          onChange={e =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button
          onClick={login}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          New admin?{" "}
          <Link to="/signup" className="text-blue-600">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
