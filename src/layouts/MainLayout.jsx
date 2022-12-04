import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Navbar } from '../components/Navbar'

export const MainLayout = () => {
   return (
      <>
         <Navbar/>
         <main id='main'>
            <Outlet/>
         </main>
         <ToastContainer/>
      </>
   )
}
