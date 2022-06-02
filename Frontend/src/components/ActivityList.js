import React, { useState, useMemo } from 'react';
import ListRow from './ListRow';
import Pagination from './Pagination';
import Filters from './Filters';


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

    //Filters
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    const getFilteredList = () => {
        if(!selectedCategory) {
            return activities
        }
        return activities.filter((activity) => activity.categories.name === selectedCategory)
    };

    const filteredList = useMemo(getFilteredList, [selectedCategory, activities])

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }

      
    return(
        // List headers and footers 
        <div className="d-flex flex-wrap aligns-items-center justify-content-between mb-4 ">
            <div className="table-list">
                <div className="d-flex flex-wrap justify-content-between mb-2">
                <h4>Últimos movimientos:</h4>
                <Filters activities={activities} handleCategoryChange={handleCategoryChange} filteredList={filteredList}/>
                </div>
                <div >
                    <table className="table table-bordered table-stripped table-hover" id="dataTable" width="100%" cellSpacing="0" >
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
                        {/*<!-- Conditional rendering depending of the applied filter -->*/}
                        <tbody>
                            {selectedCategory === 'Todas' ||
                            filteredList.map((row, i) => {
                                return <ListRow {...row} key={i} handleEdit={handleEdit} handleDelete={handleDelete}/>
                            })
                            }
                             {selectedCategory === 'Todas' &&
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