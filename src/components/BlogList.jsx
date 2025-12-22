// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../services/api";

// export default function BlogList({ user, token }) {
//   const [blogs, setBlogs] = useState([]);

//   // Fetch all blogs
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await API.get("/blogs");
//         setBlogs(res.data);
//       } catch (err) {
//         console.error("Error fetching blogs:", err);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   // Like blog
//   const likeBlog = async (id) => {
//     try {
//       await API.post(`/blogs/${id}/like`);
//       setBlogs(prev =>
//         prev.map(b => (b._id === id ? { ...b, likes: b.likes + 1 } : b))
//       );
//     } catch (err) {
//       console.error("Error liking blog:", err);
//     }
//   };

//   // Delete blog (admin only)
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this blog?")) return;

//     try {
//       await API.delete(`/blogs/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setBlogs(prev => prev.filter(b => b._id !== id));
//     } catch (err) {
//       console.error("Error deleting blog:", err);
//       alert("Error deleting blog");
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">All Blogs</h1>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {blogs.map(blog => (
//           <div
//             key={blog._id}
//             className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
//           >
//             {/* Blog Image */}
//             <img
//               src={blog.image ? `${BASE_URL}/uploads/${blog.image}` : "/default.jpg"}
//               alt={blog.title}
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />

//             {/* Blog Title */}
//             <h3 className="text-xl font-semibold mb-2 text-gray-900">{blog.title}</h3>

//             {/* Blog Snippet */}
//             <p className="text-gray-600 text-sm mb-4">{blog.content.slice(0, 120)}...</p>

//             {/* Likes & Read More */}
//             <div className="flex items-center justify-between">
//               <button
//                 onClick={() => likeBlog(blog._id)}
//                 className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
//               >
//                 ❤️ <span>{blog.likes}</span>
//               </button>

//               <Link
//                 to={`/blog/${blog._id}`}
//                 className="text-blue-600 hover:text-blue-700 text-sm font-medium"
//               >
//                 Read More →
//               </Link>
//             </div>

//             {/* Admin Delete Button */}
//             {user?.role === "admin" && (
//               <button
//                 onClick={() => handleDelete(blog._id)}
//                 className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Empty State */}
//       {blogs.length === 0 && (
//         <p className="text-gray-500 mt-10 text-center">No blogs available yet.</p>
//       )}
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import { BASE_URL } from "../services/api";

export default function BlogList({ user, token }) {
  const [blogs, setBlogs] = useState([]);

  // Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await API.get("/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  // Like blog
  const likeBlog = async (id) => {
    try {
      await API.post(`/blogs/${id}/like`);
      setBlogs(prev =>
        prev.map(b => (b._id === id ? { ...b, likes: b.likes + 1 } : b))
      );
    } catch (err) {
      console.error("Error liking blog:", err);
    }
  };

  // Delete blog (admin only)
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await API.delete(`/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(prev => prev.filter(b => b._id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
      alert("Error deleting blog");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">All Blogs</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => (
          <div
            key={blog._id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            {/* Blog Image */}
            <img
              src={blog.image ? `${BASE_URL}/uploads/${blog.image}` : "/default.jpg"}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Blog Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{blog.title}</h3>

            {/* Blog Snippet */}
            <p className="text-gray-600 text-sm mb-4">{blog.content.slice(0, 120)}...</p>

            {/* Likes & Read More */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => likeBlog(blog._id)}
                className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
              >
                ❤️ <span>{blog.likes}</span>
              </button>

              <Link
                to={`/blog/${blog._id}`}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Read More →
              </Link>
            </div>

            {/* Admin Delete Button */}
            {user?.role === "admin" && (
              <button
                onClick={() => handleDelete(blog._id)}
                className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {blogs.length === 0 && (
        <p className="text-gray-500 mt-10 text-center">No blogs available yet.</p>
      )}
    </div>
  );
}
