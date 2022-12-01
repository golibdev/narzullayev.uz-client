import { useEffect } from "react";
import { BlogCard } from "../components/BlogCard";
import { Pagination } from "../components/Pagination";
import { TrendingPosts } from "../components/TrendingPosts";
import useBlogs from "../hooks/useBlogs";

export const Blogs = () => {
   const { blogs } = useBlogs();
   const title = "Narzullayev.uz | Maqolalar";
   window.document.title = title;
   return (
      <>
         <section id="search-result" className="search-result">
            <div className="container">
               <div className="row">
                  <div className="col-lg-9">
                     <h3 className="category-title">Maqolalar</h3>
                     {blogs.map(item => (
                        <BlogCard item={item} key={item._id} />
                     ))}
                     <div className="text-center">
                        <Pagination/>
                     </div>
                  </div>
                  <TrendingPosts/>
               </div>
            </div>
         </section>
      </>
   )
}
