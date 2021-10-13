import React from 'react';
import './Pagination.scss';
import usePagination from '@mui/material/usePagination'
// import { styled } from '@mui/material/styles';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {

    // let pageNumbers = []
    // for (let i = 1; i < Math.ceil(totalUsers/usersPerPage) + 1; i++) {
    //     pageNumbers.push(i)
    // }
    const { items } = usePagination({
        count: (totalUsers/usersPerPage),
      });
    
      return (
        <nav>
          <ul className="pagination-container">
            {items.map(({ page, type, selected, ...item }, index) => {
              let children = null;
    
              if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                children = '…';
              } else if (type === 'page') {
                children = (
                  <button
                    type="button"
                    style={{
                      fontWeight: selected ? 'bold' : undefined,
                    }}
                    {...item}
                  >
                    {page}
                  </button>
                );
              } else {
                children = (
                  <button type="button" {...item}>
                    {type}
                  </button>
                );
              }
    
              return <li key={index} className="pagination-list">{children}</li>;
            })}
          </ul>
        </nav>
    );

    // return (
    //     <>
    //        <ul className="pagination-container">
    //             {pageNumbers.map(number => 
    //                 <li key={number} className="pagination-num">
    //                     <a href="!#" onClick={() => paginate(number)}>
    //                         {number}
    //                     </a>
    //                 </li>
    //             )}   
    //         </ul> 
    //     </>
    // )
}

export default Pagination;
