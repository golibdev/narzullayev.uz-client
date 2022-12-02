import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import useBlogs from '../hooks/useBlogs';

export const Pagination = ({ setCurrentPage, currentPage, setBlogs, pageCount }) => {
   const { getPagination } = useBlogs();

   const handleClick = (e) => {
      setCurrentPage(e.selected + 1);
      console.log("Ishla");
      console.log(currentPage);
   }

   const getData = async (currentPage) => {
      try {
         const result = await getPagination(currentPage);
         setBlogs(result.blogs);
      } catch (err) {}
   }

   useEffect(() => {
      getData(currentPage);
   }, [currentPage])
   return (
      <ReactPaginate 
         breakLabel="..."
         onPageChange={handleClick}
         pageRangeDisplayed={5}
         nextLabel={<i className="bi bi-arrow-right font-weight-bold"></i>}
         previousLabel={<i className="bi bi-arrow-left font-weight-bold"></i>}
         pageCount={pageCount}
         containerClassName="custom-pagination d-flex"
         activeClassName="active"
         activeLinkClassName='active'
         disabledClassName="disabled"
         nextClassName='next'
         previousClassName='prev'
      />
   )
}
