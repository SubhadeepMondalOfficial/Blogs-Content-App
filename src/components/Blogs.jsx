import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Cards";

export default function Blogs() {
  const { loading, posts } = useContext(AppContext);

  return (
    <div>
      <div className="max-w-[700px] mx-auto px-3 my-[100px]">
        {loading ? (
          <div className="flex justify-center items-center -mt-20 h-screen">
            <div className="spinner"></div>
          </div>
        ) : posts.length === 0 ? (
          <div>No Posts Found</div>
        ) : (
          <div className="flex flex-col gap-10">
            {posts.map((post) => (
              <Card post={post} key={post.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
