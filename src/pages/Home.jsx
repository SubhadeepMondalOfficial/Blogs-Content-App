import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

export default function Home() {
  return (
    <div>
      <div className="my-[100px]">
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
}
