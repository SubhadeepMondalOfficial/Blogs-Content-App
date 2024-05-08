import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

export default function CategoryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryName = location.pathname.split("/").at(-1);
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
          Blogs On <span className="underline">{categoryName}</span>
        </p>
      </div>
      <div className="mt-[25px]">
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
}
