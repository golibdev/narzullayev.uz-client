import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import useBlogs from '../hooks/useBlogs';

export const TrendingPosts = () => {
   const [blogs, setBlogs] = useState([]);
   const [loading, setLoading] = useState(false);
   const { getData } = useBlogs()

   useEffect(() => {
      const fetching = async () => {
         try {
            const data = await getData("TOP_BLOGS");
            setBlogs(data);
            setTimeout(() => {
               setLoading(true);
            }, 1000);
         } catch (err) {}
      }

      fetching();
   }, [])
   return (
      <div className="col-lg-3">
         <div className="trending">
            <ul className="trending-post">
               {loading ? 
                  <h3 className='d-flex'>Eng ko'p o'qilgan</h3> 
                  : <Skeleton/>
               }
               {blogs.map((item, index) => (
                  <li key={item._id}>
                     <Link to={`/blogpost/${item.slugify}`}>
                        <span className="number">{index + 1}</span>
                        <h3 style={{ textDecoration: 'underline' }}>
                           {loading ? item.title : <Skeleton count={3} />}
                        </h3>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>

      </div>
   )
}
