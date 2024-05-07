import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//Step-1 Create useContext
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  //Data Filling from API Response
  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let apiUrl = `${baseUrl}?page=${page}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
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
    fetchBlogPosts(page);
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
