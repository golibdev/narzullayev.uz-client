import { useEffect, useState } from 'react';
import useBlogs from '../hooks/useBlogs';
import { Card } from './Card';

export const MainBlogs = () => {
   const [blogs, setBlogs] = useState([]);
   const [loading, setLoading] = useState(false);
   const { getData } = useBlogs()

   useEffect(() => {
      const fetching = async () => {
         try {
            const data = await getData("ALL_BLOGS");
            setBlogs(data.blogs);
            setTimeout(() => {
               setLoading(true);
            }, 500);
         } catch (err) {}
      }

      fetching();
   }, [])
   return (
      <div className="col-lg-9">
         <div className="row g-3">
            {blogs.map(item => (
               <div className="col-lg-4 col-md-6 border-start custom-border" key={item._id}>
                  <Card item={item} loading={loading} />
               </div>
            ))}
         </div>
      </div>
   )
}
