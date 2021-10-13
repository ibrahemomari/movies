import React from "react";

function Pagination({moviesPerPage, totalmovies, paginate}) {
const pageNumbers=[];
for (let i = 0; i < Math.ceil(totalmovies/moviesPerPage); i++) {
    pageNumbers.push(i);
    
}
  return (<>
    <ul className="pagination">
        {pageNumbers.map(number=>{
            return(
                <li key={number} className="page-item">
                    <a onClick={()=>paginate(number)} href="!#" className="page-link">
                        {number+1}
                    </a>
                </li>
            )
        })}
    </ul>
  
  </>);
}

export default Pagination;
