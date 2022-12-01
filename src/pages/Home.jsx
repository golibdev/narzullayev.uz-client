import { Carousel } from '../components/Carousel'
import { Posts } from '../components/Posts'

export const Home = () => {
   const title = "Narzullayev.uz | Shaxsiy blog";
   window.document.title = title;
   return (
      <>
         <Carousel/>
         <Posts/>
      </>
   )
}
