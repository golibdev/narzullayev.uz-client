import { createContext } from "react";
import { getAllBlog, createComment, getPagination, getOne, getTopBlogs, searchData } from '../services/services'
const Context = createContext(null);

function Provider({ children, ...rest }) {
   const getData = async (type) => {
      try {
         switch(type) {
            case "ALL_BLOGS":
               const all = await getAllBlog();
               const pagination = all.pagination
               return { blogs: all.blogs, pagination }
            case "TOP_BLOGS":
               const top = await getTopBlogs();
               return top
         }
      } catch (err) {}
   }
   const data = {
      getAllBlog,
      getPagination,
      getOne,
      createComment,
      getData,
      searchData
   }
   return (
      <Context.Provider value={data} {...rest}>
         {children}
      </Context.Provider>
   )
}

export { Context };
export default Provider;