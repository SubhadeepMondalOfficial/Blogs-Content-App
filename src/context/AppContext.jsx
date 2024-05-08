import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

//Step-1 Create useContext
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();

  //Data Filling from API Response
  async function fetchBlogPosts(page = 1, tag = null, category) {
    setLoading(true);
    let apiUrl = `${baseUrl}get-blogs?page=${page}`;
    if (tag) {
      apiUrl += `&tag=${tag}`;
    } else if (category) {
      apiUrl += `&category=${category}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log("data from AppContext =>");
      console.log(data);
      setPosts(data?.posts);
      setPage(data?.page);
      setTotalPages(data?.totalPages);
    } catch (error) {
      console.error("Failed to Fetch Data from API", error);
      setLoading(true);
      setPosts([]);
      setPage(1);
      setTotalPages(null);
    }

    setLoading(false);
  }

  // When any child call handlerPageChange
  function handlerPageChange(page) {
    setPage(page);
    navigate({ search: `?page=${page}` });
    // fetchBlogPosts(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    handlerPageChange,
    fetchBlogPosts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
