import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import useBlogs from '../hooks/useBlogs';
import { toast } from 'react-toastify';

export const AddComments = ({ comments, blogId, slug, setComments }) => {
   const { createComment, getOne } = useBlogs();
   const [email, setEmail] = useState('');
   const [comment, setComment] = useState('');
   const [captcha, setCaptcha] = useState('');

   const handleCreateComment = async (e) => {
      e.preventDefault();

      const check = {
         email: email.trim().length === 0,
         comment: comment.trim().length === 0,
         captcha: captcha.trim().length === 0
      }

      if(check.email || check.comment || check.captcha) {
         return toast.warning(`Barcha maydonlarni to'ldiring!`);
      }

      if(!validateCaptcha(captcha)) {
         return toast.error("Captcha ma'lumotlarni xato, qayta uruning!");
      }

      const params = {
         email, 
         comment
      }
      try {
         const res = await createComment(blogId, params);
         if(res.status === 200) {
            toast.success(res.msg);
            loadCaptchaEnginge(6);
            setCaptcha('');
            setEmail('');
            setComment('');
            const result = await getOne(slug);
            setComments(result.blog.comments);
         } else {
            toast.error(res.msg);
         }
      } catch (err) {}
   }

   useEffect(() => {
      loadCaptchaEnginge(6)
   }, [])
   
   return (
      <div className={`row justify-content-center ${comments.length > 0 && 'mt-5'} mb-5`}>

         <div className="col-lg-12">
            <h1 className="comment-title mb-3">Izoh qoldirish</h1>
            <div className="row">
               <div className="col-12 mb-3">
                  <label htmlFor="comment-email" className='form-label'>Elektron pochta</label>
                  <input 
                     type="email" className="form-control" 
                     id="comment-email" 
                     placeholder="narzullayev.uz@mail.ru"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                  />
               </div>
               <div className="col-12 mb-3">
                  <label htmlFor="comment-message" className='form-label'>Izoh mazmuni</label>

                  <textarea 
                     className="form-control" 
                     id="comment-message" 
                     placeholder="Izoh mazmuni" cols="30" rows="10"
                     onChange={e => setComment(e.target.value)}
                     value={comment}
                  />
               </div>
               <div className='col-12 mb-3'>
                  <LoadCanvasTemplate />
               </div>
               <div className='col-12 mb-3'>
                  <input 
                     type="text" 
                     className='form-control' 
                     placeholder='Captcha qiymatini kiriting' 
                     value={captcha}
                     onChange={e => setCaptcha(e.target.value)}   
                  />
               </div>
               <div className="col-12">
                  <input onClick={handleCreateComment} type="submit" className="btn btn-primary" value="Izoh qoldirish"/>
               </div>
            </div>
         </div>
      </div>
   )
}
