import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="text-center py-4 shadow-lg fixed top-0 left-0 w-full bg-white">
      <NavLink to={"/"}>
        <h1 className="text-3xl font-bold uppercase tracking-wider">
          Developer Blogs
        </h1>
      </NavLink>
    </div>
  );
}
