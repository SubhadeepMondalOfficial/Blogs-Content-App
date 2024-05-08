import { NavLink } from "react-router-dom";

export default function Card({ post }) {
  console.log("post");
  console.log(post);
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <h3 className="text-lg font-bold hover:underline">{post.title}</h3>
      </NavLink>
      <p>
        By <span className="italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold underline">{post.category}</span>
        </NavLink>
      </p>
      <p>Posted On {post.date}</p>

      <p className="mt-4 mb-1">{post.content}</p>
      <p className="flex gap-2">
        {post.tags.map((tag, index) => (
          <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`} key={index}>
            <span className="underline text-blue-500 text-xs font-bold">
              #{tag}
            </span>
          </NavLink>
        ))}
      </p>
    </div>
  );
}
