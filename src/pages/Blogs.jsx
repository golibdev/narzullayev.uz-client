import { useEffect, useState } from "react";
import { BlogCard } from "../components/BlogCard";
import { Pagination } from "../components/Pagination";
import { TrendingPosts } from "../components/TrendingPosts";
import useBlogs from "../hooks/useBlogs";
import Skeleton from 'react-loading-skeleton';
import { Seo } from "../components/Seo";

export const Blogs = () => {
   const { getData } = useBlogs();
   const title = "Narzullayev.uz | Maqolalar";
   const [blogs, setBlogs] = useState([]);
   const [loading, setLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(0);
   const [pageCount, setPageCount] = useState(0);

   useEffect(() => {
      const fetching = async () => {
         try {
            const { blogs, pagination } = await getData("ALL_BLOGS");
            setBlogs(blogs);
            setPageCount(Math.ceil(pagination.total / 10));
            setLoading(true);
         } catch (err) {}
      }

      fetching();
   }, [])
   return (
      <>
         <Seo
            title={title}
            type={'article'}
            description={"Narzullayev G'olibning shaxsiy blog web sayti"}
            name={'Narzullayev.uz'}
            author={"G'olib Narzullayev"}
         />
         <section id="search-result" className="search-result">
            <div className="container">
                  <div className="row">
                     <div className="col-lg-9">
                        { blogs.length > 0 ? (
                           <>
                              <h2 className="mb-3">
                                 {"Maqolalar"}
                              </h2>
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
                           </>
                        ): (
                           loading ?
                              <h5 className="alert alert-danger">Maqolalar mavjud emas</h5>
                              : <Skeleton width={'100%'} />
                        )}
                     </div>
                     <TrendingPosts/>
                  </div>
            </div>
         </section>
      </>
   )
}
