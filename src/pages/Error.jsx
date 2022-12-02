import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
   return (
      <main>
         <div className="container">
            <section 
               className="section error-404 d-flex flex-column justify-content-center align-items-center text-center" 
               style={{ height: "85vh" }}
            >
               <img src="/assets/img/error.png" width="300" className='img-fluid' alt="image" />
               <h2>Kechirasiz, sahifa topilmadi!</h2>
               <Link to='/' className="btn btn-primary bg-primary">Bosh sahifa</Link>
            </section>
         </div>
      </main>
   )
}
