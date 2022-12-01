import useBlogs from "../hooks/useBlogs";
import { Card } from "./Card"

export const FirstPost = () => {
   const { blogs } = useBlogs();
   return (
      <div className="col-lg-4">
         <Card item={blogs[0]} lg={'lg'} />
      </div>
   )
}
