// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { BASE_URL } from "../services/api";

// export default function BlogDetails() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [comment, setComment] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Fetch single blog by ID
//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const res = await API.get(`/blogs/${id}`);
//         setBlog(res.data);
//       } catch (err) {
//         console.error("Error fetching blog:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBlog();
//   }, [id]);

//   // Add a comment
//   const addComment = async () => {
//     if (!comment.trim()) return;
//     try {
//       const res = await API.post(`/blogs/${id}/comment`, { text: comment });
//       setBlog(prev => ({
//         ...prev,
//         comments: [...prev.comments, res.data]
//       }));
//       setComment("");
//     } catch (err) {
//       console.error("Error adding comment:", err);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-center py-20 text-gray-500">
//         Loading blog...
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="text-center py-20 text-red-500">
//         Blog not found
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
    
//       <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
       
//         {blog.image && (
//           <img
//             src={`${BASE_URL}/uploads/${blog.image}`}
//             alt={blog.title}
//             className="w-full h-80 object-cover rounded-md"
//           />
//         )}

      
//         <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>

     
//         <p className="text-sm text-gray-500">
//           Published on {new Date(blog.createdAt).toDateString()}
//         </p>

     
//         <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//           {blog.content}
//         </p>
//       </div>

    
//       <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
//         <h3 className="text-xl font-semibold">
//           Comments ({blog.comments?.length || 0})
//         </h3>

    
//         <div className="space-y-3">
//           {blog.comments?.length > 0 ? (
//             blog.comments.map((c, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-100 rounded-lg px-4 py-2 text-gray-700"
//               >
//                 💬 {c.text}
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-sm">
//               No comments yet. Be the first one!
//             </p>
//           )}
//         </div>

     
//         <div className="flex gap-3">
//           <input
//             value={comment}
//             onChange={e => setComment(e.target.value)}
//             placeholder="Write your comment..."
//             className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={addComment}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition"
//           >
//             Post
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import { BASE_URL } from "../services/api";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch single blog by ID
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await API.get(`/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // Add a comment
  const addComment = async () => {
    if (!comment.trim()) return;
    try {
      const res = await API.post(`/blogs/${id}/comment`, { text: comment });
      setBlog(prev => ({
        ...prev,
        comments: [...prev.comments, res.data]
      }));
      setComment("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading blog...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-20 text-red-500">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
    
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
       
        {blog.image && (
          <img
            src={`${BASE_URL}/uploads/${blog.image}`}
            alt={blog.title}
            className="w-full h-80 object-cover rounded-md"
          />
        )}

      
        <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>

     
        <p className="text-sm text-gray-500">
          Published on {new Date(blog.createdAt).toDateString()}
        </p>

     
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>
      </div>

    
      <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
        <h3 className="text-xl font-semibold">
          Comments ({blog.comments?.length || 0})
        </h3>

    
        <div className="space-y-3">
          {blog.comments?.length > 0 ? (
            blog.comments.map((c, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-lg px-4 py-2 text-gray-700"
              >
                💬 {c.text}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">
              No comments yet. Be the first one!
            </p>
          )}
        </div>

     
        <div className="flex gap-3">
          <input
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Write your comment..."
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addComment}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
