import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const BlogCard = ({ item, loading }) => {
   return (
      <div className="d-md-flex post-entry-2 small-img">
         <Link to={`/blogpost/${item.slugify}`} className="me-4 thumbnail mt-4">
            {loading ? <img src={item.image} style={{ height: '190px', objectFit: "cover" }} alt={item.title} className="img-fluid rounded w-100" /> : (
               <Skeleton height={160} className="mb-3" />
            )}
         </Link>

         <div className='w-100'>
            {loading ? (
               <div className="post-meta">
                  <span className="date">{item.category?.categoryName}</span> 
                  <span className="mx-1">•</span> 
                  <span>{moment(item.createdAt).format('DD.MM.YYYY')}</span>
                  <span className="mx-1">•</span> 
                  <span>
                     <i className='bi bi-eye me-1'></i>
                     {item.views}
                  </span>
               </div>
            ) : (
               <Skeleton count={1} width={'50%'} className="mb-3" />
            )}

            {loading ? (
               <h3 style={{ textDecoration: 'underline' }}>
                  <Link to={`/blogpost/${item.slugify}`}>{item.title}</Link>
               </h3>
            ) : <div>
                  <Skeleton count={2} containerClassName="mb-3" />
               </div>
            }

            {loading ? (
               <p>{item.shortContent}</p>
            ): (
               <p>
                  <Skeleton count={4} />
               </p>
            )}
         </div>
      </div>
   )
}
