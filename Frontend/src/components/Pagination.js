import React from "react";

const Pagination = ({movementsPerPage, totalMovements, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalMovements / movementsPerPage); i++) {
        pageNumbers.push(i);
        
    }

    return (
        <nav>
            <div className="d-flex flex-wrap justify-content-center p-2">           
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            </div>
            

        </nav>
    )
}

export default Pagination; 