import useBlogs from "../hooks/useBlogs";
import { Card } from "./Card"

export const FirstPost = () => {
   const { blogs } = useBlogs();
   const first = blogs[0]
   return (
      <div className="col-lg-4">
         <Card item={first} lg={'lg'} />
      </div>
   )
}
