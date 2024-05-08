import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import Card from "../components/Cards";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

export default function TagPage() {
  // const {page} = useContext(AppContext)
  const location = useLocation();
  const navigate = useNavigate();
  const tagName = location.pathname.split("/").at(-1);
  const { posts } = useContext(AppContext);

  // async function fetchTagBlogs(){
  //     const tagUrl = `${baseUrl}get-blogs?page=${page}&tag=${tagName}`
  //     const response = await fetch(tagUrl)
  //     const data = await response.json()
  //     console.log(`data from tagUrl => ${data}`);
  //     console.log(data);
  // }

  // useEffect(() => {
  //     fetchTagBlogs()
  // }, [location.pathname])

  return (
    <div className="max-w-[700px] mx-auto px-3 my-[100px]">
      <div className="flex gap-5 items-center">
        <button
          className="border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <p className="text-xl font-bold">
          Blogs Tagged{" "}
          <span className="underline text-blue-500">{`#${tagName}`}</span>
        </p>
      </div>
      <div className="mt-[25px]">
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
}
