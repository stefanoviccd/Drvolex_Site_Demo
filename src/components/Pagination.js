import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({totalImages, imagesPerPage, paginate}) {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalImages.length/imagesPerPage);i++){
        pageNumbers.push(i);
    }
  return <div className="pagination-div">
      <ul className="pagination">
      {pageNumbers.map(number=>(
          <li key={number} className="page-item">
              <a onClick={()=>paginate(number)} href="#" className='page-link'>
                  {number}
              </a>
             
          </li>
          
      ))}
     
  </ul>
       


  </div>;
}

export default Pagination;
