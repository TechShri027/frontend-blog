import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { currentUser, currentUserToken } = useAuth() 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Pass user and token to BlogList */}
        <Route
          path="/"
          element={<BlogList user={currentUser} token={currentUserToken} />}
        />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
