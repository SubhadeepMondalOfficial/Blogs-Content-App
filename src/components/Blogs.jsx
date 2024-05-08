import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Cards";
import Spinner from "./Spinner";

export default function Blogs() {
  const { loading, posts } = useContext(AppContext);

  return (
    <div>
      <div className="lg:max-w-[700px] mx-auto px-4 sm:flex sm:justify-center">
        {loading ? (
          <Spinner />
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
