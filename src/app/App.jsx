import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Provider from '../contexts/Provider';
import { MainLayout } from '../layouts/MainLayout';
import Wrapper from '../layouts/Wrapper';
import { Blogs } from '../pages/Blogs';
import { Error } from '../pages/Error';
import { Home } from '../pages/Home';
import SinglePage from '../pages/SinglePage';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';

export const App = () => {
   const helmetContext = {};
   return (
      <Router>
         <div>
            <Wrapper>
               <HelmetProvider context={helmetContext}>
                  <Provider>
                     <Routes>
                        <Route path='/' element={<MainLayout/>}>
                           <Route index element={<Home/>}/>
                           <Route path='/blogs' element={<Blogs/>}/>
                           <Route path='/blogpost/:slug' element={<SinglePage/>}/>
                           <Route path='*' element={<Error/>} />
                        </Route>
                     </Routes>
                  </Provider>
               </HelmetProvider>
            </Wrapper>
         </div>
      </Router>
   )
}
