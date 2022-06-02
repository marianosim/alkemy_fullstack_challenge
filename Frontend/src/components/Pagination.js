import React from "react";

/* Limits 10 transactions displayed per page in descendent order */

const Pagination = ({movementsPerPage, totalMovements, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalMovements / movementsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="page-numbers">
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