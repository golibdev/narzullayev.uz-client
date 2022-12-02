import { Link } from 'react-router-dom';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';

export const Card = ({item, loading }) => {
   return (
      <div className={`post-entry-1`}>
         {
            loading ? 
               <Link to={`/blogpost/${item.slugify}`}>
                  <img src={item.image} alt={item.title} className="img-fluid rounded mb-2 w-100" style={{ height: 190, objectFit: 'cover' }} />
               </Link>
            : <Skeleton height={180} className="mb-3" />
         }
         {
            loading ? 
               <div className="post-meta">
                  <span className="date">{item.category.categoryName}</span>
                  <span className="mx-1">•</span> 
                  <span>{moment(item.createdAt).format('DD.MM.YYYY')}</span>
               </div>
            : <Skeleton width={'50%'} className="mb-3" />
         }
         {
            loading ? (
               <h2 style={{ textDecoration: 'underline' }}>
                  <Link to={`/blogpost/${item.slugify}`}>{item.title}</Link>
               </h2>
            ) : <Skeleton count={3}/>
         }
      </div>
   )
}
