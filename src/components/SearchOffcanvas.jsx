import { useState } from 'react';
import useBlogs from '../hooks/useBlogs';
import { toast } from 'react-toastify';
import { Card } from './Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

export const SearchOffcanvas = () => {
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
         } else {
            setIsSearch(false);
            setLoading(false);
         }
      } catch (err) {}
   }

   const handleClose = () => {
      setShow(false)
      setBlogs([]);
      setIsSearch(false);
   };
   const handleShow = () => setShow(true);

   return (
      <>
         <i onClick={handleShow} className='bi bi-search fs-5 mx-2'></i>
         <Offcanvas show={show} onHide={handleClose} placement="top">
            <Offcanvas.Header closeButton>
               <Offcanvas.Title>Maqola qdirish</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
               <Form.Control placeholder='Qidirish' onChange={searchHandler} />
               <Row>
                  {
                     blogs.length > 0 ? (
                        isSearch && (
                           blogs.map(item => (
                              <Col className='mt-4' lg={3} md={4} sm={6} key={item._id}>
                                 <Card handleClose={handleClose} loading={loading} item={item} />
                              </Col>
                           ))
                        )
                     ) : (
                        isSearch && <h5>Qidiruv natijasida ma'lumot topilmadi</h5>
                     )
                  }
               </Row>
            </Offcanvas.Body>
         </Offcanvas>
      </>
   )
}
