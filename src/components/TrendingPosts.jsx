import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import useBlogs from '../hooks/useBlogs';

export const TrendingPosts = () => {
   const {blogs} = useBlogs();
   const trending = blogs.sort((a, b) => b.views - a.views);
   return (
      <div className="col-lg-3">
         <div className="trending">
            <h3>Eng ko'p o'qilgan</h3>
            <ul className="trending-post">
               {trending.map((item, index) => (
                  <li key={item._id}>
                     <Link to={`/blogpost/${item.slugify}`}>
                        <span className="number">{index + 1}</span>
                        <h3>
                           {blogs ? item.title : <Skeleton count={3} />}
                        </h3>
                        <span className="author">G'. Narzullayev</span>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>

      </div>
   )
}
