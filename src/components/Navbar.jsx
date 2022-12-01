import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navbarLinks } from '../constants/navbarLinks';

export const Navbar = () => {
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
      <header id="header" className="header d-flex align-items-center fixed-top">
         <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

            <Link to="/" className="logo d-flex align-items-center">
               <img src="/assets/img/logo.png" alt="logo"/>
               <h1>Narzullayev.uz</h1>
            </Link>

            <nav id="navbar" className="navbar">
               <ul>
                  {navbarLinks.map(item => (
                     <li key={item.id}>
                        <Link onClick={closeMobileMenu} to={item.path}>{item.title}</Link>
                     </li>
                  ))}
               </ul>
            </nav>

            <div className="position-relative d-flex align-items-center">
               <a href="https://t.me/gnarzullayev" target={'_blank'} className="mx-2"><span className="bi-telegram"></span></a>
               <a href="https://instagram.com/golibnarzullayev1" target={'_blank'} className="mx-2"><span className="bi-instagram"></span></a>
               <a href="https://github.com/golibdev" target={'_blank'} className="mx-2"><span className="bi-github"></span></a>
               <i className={`bi ${icon ? 'bi-list' : 'bi-x'} mobile-nav-toggle`} onClick={openMobileMenu}></i>
            </div>
         </div>
      </header>
   )
}
