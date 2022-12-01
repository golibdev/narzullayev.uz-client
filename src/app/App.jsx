import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Provider from '../contexts/Provider';
import { MainLayout } from '../layouts/MainLayout';
import { Blogs } from '../pages/Blogs';
import { Home } from '../pages/Home';
import SinglePage from '../pages/SinglePage';

export const App = () => {
   return (
      <Router>
         <Provider>
            <Routes>
               <Route path='/' element={<MainLayout/>}>
                  <Route index element={<Home/>}/>
                  <Route path='/blogs' element={<Blogs/>}/>
                  <Route path='/blogpost/:slug' element={<SinglePage/>}/>
               </Route>
            </Routes>
         </Provider>
      </Router>
   )
}
