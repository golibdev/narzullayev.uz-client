import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Navbar } from '../components/Navbar'

export const MainLayout = () => {
   return (
      <>
         <main id='main'>
            <Navbar/>
            <Outlet/>
         </main>
         <ToastContainer/>
      </>
   )
}
