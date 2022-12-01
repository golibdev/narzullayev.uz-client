import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const MainLayout = () => {
   return (
      <>
         <Navbar/>
         <main id='main'>
            <Outlet/>
         </main>
      </>
   )
}
