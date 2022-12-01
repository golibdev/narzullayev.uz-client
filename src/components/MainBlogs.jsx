import useBlogs from '../hooks/useBlogs';
import { Card } from './Card';

export const MainBlogs = () => {
   const { blogs } = useBlogs();
   return (
      <div className="col-lg-5">
         <div className="row g-5">
            {blogs.filter((_, index) => index !== 0).map(item => (
               <div className="col-lg-6 col-md-6 border-start custom-border" key={item._id}>
                  <div className="d-flex flex-wrap">
                     <Card item={item}/>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}
