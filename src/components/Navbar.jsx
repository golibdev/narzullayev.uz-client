import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { navbarLinks } from '../constants/navbarLinks';
import useBlogs from '../hooks/useBlogs';
import { SearchOffcanvas } from './SearchOffcanvas';

export const Navbar = () => {
   const { searchData } = useBlogs();
   const [show, setShow] = useState(false);
   const [blogs, setBlogs] = useState([]);
   const [isSearch, setIsSearch] = useState(false);
   const [loading, setLoading] = useState(false);

   const searchHandler = async (e) => {
      try {
         const value = e.target.value;
         if(value.length > 0) {
            const res = await searchData(value);
            setBlogs(res.data);
            setIsSearch(true);
            setLoading(true);

            if(blogs.length > 0) {
               window.document.querySelector('.offcanvas').style.height = 'auto';
            }
         } else {
            setIsSearch(false);
            setLoading(false);
            window.document.querySelector('.offcanvas').style.height = '260px';
         }
      } catch (err) {}
   }

   const handleClose = () => {
      setShow(false)
      setBlogs([]);
      setIsSearch(false);
   };
   const handleShow = () => setShow(true);
   const [icon, setIcon] = useState(true) 
   const openMobileMenu = () => {
      window.document.body.classList.toggle('mobile-nav-active');
      setIcon(!icon);
   }

   const closeMobileMenu = () => {
      window.document.body.classList.remove('mobile-nav-active');
      setIcon(true);
   }
   return (
      <>
         <header id="header" className="header d-flex align-items-center fixed-top shadow-sm bg-white">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

               <Link to="/" className="d-flex align-items-center">
                  <h1 className='fs-3'>Narzullayev.uz</h1>
               </Link>

               <nav id="navbar" className="navbar">
                  <ul>
                     {navbarLinks.map(item => (
                        <li key={item.id}>
                           <Link className='fs-4' onClick={closeMobileMenu} to={item.path}>{item.title}</Link>
                        </li>
                     ))}
                  </ul>
               </nav>

               <div className="position-relative d-flex align-items-center">
                  <i onClick={handleShow} className='bi bi-search fs-5 mx-2'></i>
                  <a href="https://t.me/gnarzullayev" target={'_blank'} className="mx-2 fs-5">
                     <span className="bi-telegram"></span>
                  </a>
                  <a href="https://instagram.com/golibnarzullayev1" target={'_blank'} className="mx-2 fs-5">
                     <span className="bi-instagram"></span>
                  </a>
                  <a href="https://github.com/golibdev" target={'_blank'} className="mx-2 fs-5">
                     <span className="bi-github"></span>
                  </a>
                  <i className={`bi ${icon ? 'bi-list' : 'bi-x'} mobile-nav-toggle`} onClick={openMobileMenu}></i>
               </div>
            </div>
         </header>

         <SearchOffcanvas
            show={show}
            handleClose={handleClose}
            blogs={blogs}
            isSearch={isSearch}
            loading={loading}
            searchHandler={searchHandler}
         />
      </>
   )
}
