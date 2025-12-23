// import { useState } from "react";
// import API from "../services/api";

// export default function AdminDashboard() {
//   const [blog, setBlog] = useState({ title: "", content: "" });
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const createBlog = async () => {
//     if (!blog.title || !blog.content) {
//       alert("Please fill in all fields");
//       return;
//     }

//     try {
//       setLoading(true);

//       // Prepare FormData for image upload
//       const formData = new FormData();
//       formData.append("title", blog.title);
//       formData.append("content", blog.content);
//       if (image) formData.append("image", image);

//       await API.post("/blogs", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       alert("Blog posted successfully!");
//       setBlog({ title: "", content: "" });
//       setImage(null);
//     } catch (err) {
//       alert(err.response?.data?.message || "Error posting blog");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
//         <h2 className="text-3xl font-bold text-gray-800 text-center">
//           Admin Dashboard
//         </h2>

//         {/* Blog Title */}
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             Blog Title
//           </label>
//           <input
//             type="text"
//             placeholder="Enter blog title"
//             value={blog.title}
//             onChange={(e) => setBlog({ ...blog, title: e.target.value })}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {/* Blog Content */}
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             Blog Content
//           </label>
//           <textarea
//             placeholder="Enter blog content"
//             value={blog.content}
//             onChange={(e) => setBlog({ ...blog, content: e.target.value })}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {/* Image Upload */}
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             Blog Image
//           </label>
//           <input
//             type="file"
//             onChange={(e) => setImage(e.target.files[0])}
//             className="w-full text-gray-700"
//           />
//           {image && (
//             <p className="text-sm text-gray-500 mt-1">
//               Selected file: {image.name}
//             </p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           onClick={createBlog}
//           disabled={loading}
//           className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition ${
//             loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {loading ? "Posting..." : "Post Blog"}
//         </button>
//       </div>
//     </div>
//   );
// }





import { useState } from "react";
import API from "../services/api";

export default function AdminDashboard() {
  const [blog, setBlog] = useState({ title: "", content: "" });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const createBlog = async () => {
    if (!blog.title || !blog.content || !image) {
      alert("Please fill all fields and select an image");
      return;
    }

    try {
      setLoading(true);

      // ✅ FormData for image upload
      const formData = new FormData();
      formData.append("title", blog.title);
      formData.append("content", blog.content);
      formData.append("image", image);

      await API.post("/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      alert("Blog posted successfully!");

      // reset form
      setBlog({ title: "", content: "" });
      setImage(null);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error posting blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Admin Dashboard
        </h2>

        {/* Blog Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Blog Title
          </label>
          <input
            type="text"
            placeholder="Enter blog title"
            value={blog.title}
            onChange={(e) =>
              setBlog({ ...blog, title: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Blog Content */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Blog Content
          </label>
          <textarea
            placeholder="Enter blog content"
            value={blog.content}
            onChange={(e) =>
              setBlog({ ...blog, content: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Blog Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full text-gray-700"
          />
          {image && (
            <p className="text-sm text-gray-500 mt-1">
              Selected file: {image.name}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={createBlog}
          disabled={loading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Posting..." : "Post Blog"}
        </button>
      </div>
    </div>
  );
}
