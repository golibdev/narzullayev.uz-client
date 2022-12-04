import { useEffect, useState } from "react";
import { BlogCard } from "../components/BlogCard";
import { Pagination } from "../components/Pagination";
import { TrendingPosts } from "../components/TrendingPosts";
import useBlogs from "../hooks/useBlogs";
import Skeleton from 'react-loading-skeleton';
import { Seo } from "../components/Seo";
import { toast } from "react-toastify";

export const Blogs = () => {
   const { getData, searchData } = useBlogs();
   const title = "Narzullayev.uz | Maqolalar";
   const [blogs, setBlogs] = useState([]);
   const [loading, setLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(0);
   const [pageCount, setPageCount] = useState(0);
   const [search, setSearch] = useState('');
   const [isSearch, setIsSearch] = useState(false);

   useEffect(() => {
      const fetching = async () => {
         try {
            const { blogs, pagination } = await getData("ALL_BLOGS");
            setBlogs(blogs);
            setPageCount(Math.ceil(pagination.total / 10));
            if(!isSearch) {
               setTimeout(() => {
                  setLoading(true);
               }, 500);
            }
         } catch (err) {}
      }

      if(search.length == 0) {
         fetching();
         setIsSearch(false);
      }
   }, [search])

   const searchingHandler = async (e) => {
      e.preventDefault();
      if(search.trim().length === 0) {
         return toast.warning("Qidirish uchun ma'lumot kiritilmagan");
      }
      setLoading(false);
      try {
         const res = await searchData(search);
         setBlogs(res.data);
         setIsSearch(true);
         setTimeout(() => {
            setLoading(true);
         }, 500);
      } catch (err) {}
   }
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
                        <form onSubmit={searchingHandler} className="input-group mb-4">
                           <input 
                              type="text" 
                              className="form-control" 
                              placeholder="Qidirish" 
                              value={search} onChange={e => setSearch(e.target.value)}
                           />
                           <span className="input-group-text">
                              <i className="bi bi-search"></i>
                           </span>
                        </form>
                        {blogs.length > 0 ? (
                           <>
                              <h2 className="mb-3">
                                 {isSearch ? "Qidiruv natijasi" : "Maqolalar"}
                              </h2>
                              {blogs.map(item => (
                                 <BlogCard item={item} key={item._id} loading={loading} />
                              ))}
                              {
                                 loading ? 
                                    <div className="text-center">
                                       {!isSearch && (
                                          <Pagination 
                                             setBlogs={setBlogs} 
                                             setCurrentPage={setCurrentPage}
                                             currentPage={currentPage}
                                             pageCount={pageCount}
                                          />
                                       )}
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
                           loading && (
                              isSearch ? (
                                 <h5 className="alert alert-danger">Qidiruv natijasida ma'lumot topilmadi</h5>
                              ) : (
                                 <h5 className="alert alert-danger">Maqolalar mavjud emas</h5>
                              )
                           )
                        )}
                     </div>
                     <TrendingPosts/>
                  </div>
            </div>
         </section>
      </>
   )
}
