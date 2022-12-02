import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Skeleton from 'react-loading-skeleton';

export const Carousel = ({ blogs, loading }) => {
   return (
      <section id="hero-slider" className="hero-slider">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  {loading ? (
                     <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={true}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                     >
                        {blogs.map(item => (
                           <SwiperSlide key={item._id}>
                              <Link to={`/blogpost/${item.slugify}`} className="img-bg d-flex align-items-end" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.image})`}}>
                                 <div className="img-bg-inner">
                                    <h2>{item.title}</h2>
                                    <p>{item.shortContent}</p>
                                 </div>
                              </Link>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  ) : (
                     <Skeleton height={400} />
                  )}
               </div>
            </div>
         </div>
      </section>
   )
}
