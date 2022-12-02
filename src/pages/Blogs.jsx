import { useEffect, useState } from "react";
import { BlogCard } from "../components/BlogCard";
import { Pagination } from "../components/Pagination";
import { TrendingPosts } from "../components/TrendingPosts";
import useBlogs from "../hooks/useBlogs";
import Skeleton from 'react-loading-skeleton';

export const Blogs = () => {
   const title = "Narzullayev.uz | Maqolalar";
   window.document.title = title;
   const [blogs, setBlogs] = useState([]);
   const [loading, setLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(0);
   const [pageCount, setPageCount] = useState(0);
   const { getData } = useBlogs()

   useEffect(() => {
      const fetching = async () => {
         try {
            const { blogs, pagination } = await getData("ALL_BLOGS");
            setBlogs(blogs);
            setPageCount(Math.ceil(pagination.total / 10));
            setTimeout(() => {
               setLoading(true);
            }, 500);
         } catch (err) {}
      }

      fetching();
   }, [])
   return (
      <>
         <section id="search-result" className="search-result">
            <div className="container">
               <div className="row">
                  <div className="col-lg-9">
                     {
                        loading ?
                           <h2>Maqolalar</h2>
                        : <Skeleton width={'50%'} className="mb-4" />
                     }
                     {blogs.map(item => (
                        <BlogCard item={item} key={item._id} loading={loading} />
                     ))}
                     {
                        loading ? 
                           <div className="text-center">
                              <Pagination 
                                 setBlogs={setBlogs} 
                                 setCurrentPage={setCurrentPage}
                                 currentPage={currentPage}
                                 pageCount={pageCount}
                              />
                           </div>
                        : (
                           <div className="d-flex align-items-center mb-3">
                              <Skeleton
                                 width={50}
                              />
                              <Skeleton
                                 className="mx-3"
                                 circle={true} 
                                 width={50} 
                                 height={50} 
                              />
                              <Skeleton
                                 width={50}
                              />
                           </div>
                        )
                     }
                  </div>
                  <TrendingPosts/>
               </div>
            </div>
         </section>
      </>
   )
}
