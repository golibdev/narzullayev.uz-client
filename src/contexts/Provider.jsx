import { createContext, useState, useEffect } from "react";
import { getAllBlog, createComment, getPagination, getOne, getTopBlogs } from '../services/Services'
const Context = createContext(null);

function Provider({ children, ...rest }) {
   const [blogs, setBlogs] = useState([]);
   const [topBlogs, setTopBlogs] = useState([]);
   const [currentPage, setCurrentPage] = useState(0);
   const [pageCount, setPageCount] = useState(0);

   const getData = async () => {
      try {
         const result = await getAllBlog();
         const top = await getTopBlogs();
         const pagination = result.pagination
         setBlogs(result.blogs);
         setTopBlogs(top);
         setPageCount(Math.ceil(pagination.total / 10));
      } catch (err) {}
   }
   const data = {
      getAllBlog,
      getPagination,
      getOne,
      createComment,
      setCurrentPage,
      setPageCount,
      setBlogs,
      blogs,
      setTopBlogs,
      topBlogs,
      currentPage,
      pageCount,
   }

   useEffect(() => {
      getData();
   }, [])
   return (
      <Context.Provider value={data} {...rest}>
         {children}
      </Context.Provider>
   )
}

export { Context };
export default Provider;