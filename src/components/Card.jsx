import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const Card = ({item, lg='' }) => {
   return (
      <div className={`post-entry-1 ${lg}`}>
         {item ? <Link to={`/blogpost/${item.slugify}`}>
            <img src={item.image} alt={item.title} className="img-fluid rounded"/>
         </Link> : (
            <Skeleton height={200} className={'mb-3'}/>
         )}
         {item ? (
            <div className="post-meta">
               <span className="date">{item.category.categoryName}</span>
               <span className="mx-1">•</span> 
               <span>{moment(item.createdAt).format('DD.MM.YYYY')}</span>
            </div>
         ) : (
            <Skeleton className='mb-3' width={'50%'} />
         )}
         {item ? (
            <h2>
               <Link to={`/blogpost/${item.slugify}`}>{item.title}</Link>
            </h2>
         ) : (
            <Skeleton count={3} />
         )}
         {item ? (
            <p className="mb-4 d-block">{item.shortContent}</p>
         ): (
            <Skeleton count={7} />
         )}
      </div>
   )
}
