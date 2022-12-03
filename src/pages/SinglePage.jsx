import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useBlogs from '../hooks/useBlogs';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';
import { TrendingPosts } from '../components/TrendingPosts';

const SinglePage = () => {
   const slug = useParams().slug;
   const { getOne } = useBlogs();
   const [blog, setBlog] = useState({});
   const [loading, setLoading] = useState(false);

   const getData = async () => {
      try {
         const result = await getOne(slug);
         setBlog(result);
         setLoading(true);
      } catch (err) {}
   }

   useEffect(() => {
      getData();
   }, [slug])

   window.document.title = 'Narzullayev.uz | ' + blog?.title;
   return (
      <section className="single-post-content">
         <div className="container">
            <div className="row">
               <div className="col-md-9 post-content content">
                  <div className="single-post">
                     {loading ? (
                        <div className="post-meta d-flex justify-content-between">
                           <div className='left'>
                              <span className="date">{blog?.category?.categoryName}</span>
                           </div>
                           <div className='right'>
                              <span className='me-3'>
                                 {moment(blog.creatadAt).format('DD.MM.YYYY')}
                              </span>
                              <span>
                                 <i className='bi bi-eye me-1'></i>
                                 {blog?.views}
                              </span>
                           </div>
                        </div>
                     ): <Skeleton className='mb-3'  count={1} width={'100%'} />}
                  </div>

                  {loading ? 
                     <h1 className="mb-5">{blog.title}</h1> 
                     :  <Skeleton className='mb-4' count={1} />}

                  {loading ? <p className='short-content'>{blog.shortContent}</p> : <Skeleton count={3} />}

                  {loading ? (
                     <img src={blog.image} className="img-fluid w-100 rounded mb-3 mt-4" />
                  ) : (
                     <Skeleton className='mt-4 mb-4' height={400} />
                  )}

                  {loading ? <p dangerouslySetInnerHTML={{ __html: blog.content }}></p> : <Skeleton count={5} />}
               </div>
               <TrendingPosts/>
            </div>
         </div>
      </section>
   )
}

export default SinglePage