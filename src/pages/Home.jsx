import { useEffect, useState } from 'react';
import { Carousel } from '../components/Carousel'
import { Posts } from '../components/Posts'
import { Seo } from '../components/Seo';
import useBlogs from '../hooks/useBlogs';

export const Home = () => {
   const title = "Narzullayev.uz | Shaxsiy blog";
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
            }, 500);
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
         <Carousel blogs={blogs} loading={loading} />
         <Posts/>
      </>
   )
}
