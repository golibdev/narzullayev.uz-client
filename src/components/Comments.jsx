import moment from "moment"
import Skeleton from "react-loading-skeleton"

export const Comments = ({ comments, loading }) => {
   return (
      <div className="comments">
         <h5 className="comment-title py-4">{comments.length > 0 ? `${comments.length} Izohlar` : "Izohlar mavjud emas"}</h5>
         {comments.map(item => (
            loading ? (
               <div className="comment mb-4" key={item._id}>
                  <div className="flex-grow-1">
                     <div className="comment-meta d-flex align-items-baseline">
                        <h6 className="me-2">{item.email}</h6>
                        <span className="text-muted">{moment(item.createdAt).fromNow()}</span>
                     </div>
                     <div className="comment-body">{item.comment}</div>
                  </div>
               </div>
            ) : (
               <div className="mb-4">
                  <Skeleton width={'50%'} className="mb-3" />
                  <Skeleton count={3} width={'100%'} />
               </div>
            )
         ))}
      </div>
   )
}
