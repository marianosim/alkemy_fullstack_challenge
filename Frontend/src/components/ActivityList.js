import React from 'react';
import { useState } from 'react';
import ListRow from './ListRow';
import Pagination from './Pagination';


const ActivityList = ({activities, handleEdit, handleDelete}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [movementsPerPage] = useState(10);

    // Pagination
    //Get current movements
    const indexOfLastMovement = currentPage * movementsPerPage;
    const indexOfFirtsMovement = indexOfLastMovement - movementsPerPage;
    const currentMovements = activities.slice(indexOfFirtsMovement, indexOfLastMovement);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
      
    return(
        // List headers and footers 
        <div className="d-sm-flex flex-wrap aligns-items-center justify-content-between mb-4 ">
            <div className="card-body">
                <h4>Movimientos:</h4>
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Descripción</th>
                                <th>Tipo</th>
                                <th>Monto</th>
                                <th>Categoría</th>
                                <th>Fecha</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                        <tr>
                                <th>Descripción</th>
                                <th>Tipo</th>
                                <th>Monto</th>
                                <th>Categoría</th>
                                <th>Fecha</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                                
                            </tr>
                        </tfoot>
                        <tbody>
                             {
                            currentMovements.map( ( row , i) => {
                                return <ListRow { ...row} key={i} handleEdit={handleEdit} handleDelete={handleDelete}/>
                            })
                            }
                        </tbody>
                    </table>
                 </div> 
                 <Pagination movementsPerPage={movementsPerPage} totalMovements={activities.length} paginate={paginate} />
            </div>
            
          
        </div>
    )
}
export default ActivityList;