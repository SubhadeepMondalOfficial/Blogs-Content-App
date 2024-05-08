import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import Card from "../components/Cards";

export default function BlogPage() {
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlog() {
    setLoading(true);
    let relatedBlogUrl = `${baseUrl}get-blog?blogId=${blogId}`;

    try {
      const response = await fetch(relatedBlogUrl);
      const data = await response.json();
      console.log(data);
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);
    } catch (error) {
      console.error(`Error from Fetch Related Blog API => ${error}`);
      setBlog(null);
      setRelatedBlog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlog();
    }
  }, [location.pathname]);

  return (
    <div className="max-w-[700px] mx-auto px-3 my-[100px]">
      <div>
        <button
          className="border-2 border-gray-300 py-1 px-4 rounded-md mb-5"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : blog ? (
          <div>
            <Card post={blog} />
            <h3 className="text-3xl font-bold mt-10 mb-8">Related Blogs</h3>
            {relatedBlog.map((singleBlog, index) => (
              <div key={index} className="mb-8">
                <Card post={singleBlog} />
              </div>
            ))}
          </div>
        ) : (
          <p>No Blog Found</p>
        )}
      </div>
    </div>
  );
}
