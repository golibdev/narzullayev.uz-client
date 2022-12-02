import { MainBlogs } from './MainBlogs';
import { TrendingPosts } from './TrendingPosts';

export const Posts = () => {
   return (
      <section id="posts" className="posts">
         <div className="container">
            <div className="row g-5">
               <MainBlogs/>
               <TrendingPosts/>
            </div>
         </div>
      </section> 
   )
}
