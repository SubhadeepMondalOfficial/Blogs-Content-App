export default function Card({ post }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{post.title}</h3>
      <p>
        By <span className="italic">{post.author}</span> on{" "}
        <span className="font-bold underline">{post.category}</span>
      </p>
      <p>Posted On {post.date}</p>

      <p className="mt-4 mb-1">{post.content}</p>
      <p className="flex gap-2">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="underline text-blue-500 text-xs font-bold"
          >
            #{tag}
          </span>
        ))}
      </p>
    </div>
  );
}
