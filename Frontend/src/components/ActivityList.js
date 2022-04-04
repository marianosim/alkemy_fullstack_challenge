import React from 'react';
import { useEffect, useState } from 'react';
import ListRow from './ListRow';
import NewActivityForm from './NewActivityForm';
import EditForm from './EditForm';
import Pagination from './Pagination';


function ActivityList(){
    const [activities, setActivities] = useState([])
    const [edit, setEdit] = useState(false);
    const [dataToEdit, setDataToEdit] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [movementsPerPage] = useState(10);


    const getActivities = async () => {
        //Fetches data from backend API
       await fetch('http://localhost:3001/api/activities')
        .then((response) => response.json())
        .then((activities) => setActivities(activities.data))
    }
    useEffect(() => {
        getActivities()
    },[])

    const editActivity = async (obj) => {
        await fetch('http://localhost:3001/api/activities/' + obj.dataset.id)
        .then((response) => response.json())
        .then((data) => setDataToEdit(data.data))
        setEdit(true)
    }
    
    const handleEdit = (e) => {
      editActivity(e.target)
    }
        
      const handleEditForm = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value, e.target[1].value, e.target[2].value, dataToEdit.id)
        let info = {
            description: e.target[0].value,
            amount: e.target[1].value,
            category_id: e.target[2].value
          };
        
              let res = await fetch(`http://localhost:3001/api/activities/edit/${dataToEdit?.id}`, {
                  method: "PUT",
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(info)
              });
                await res.json();
                setEdit(false)
                getActivities();
            };
      const handleDelete = async(e) => {
        e.preventDefault();
        await fetch(`http://localhost:3001/api/activities/delete/${e.target[0].value}`, {
            method: 'DELETE'
        });
        getActivities();
    };

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
            
            {edit ||
                <div className='form-responsive p-5'>
                <NewActivityForm 
                getActivities={getActivities} />
                </div>
            }
            {edit &&
                <EditForm 
                function={handleEditForm}
                description={dataToEdit?.description}
                amount={dataToEdit?.amount}
                category_id={dataToEdit?.category_id}
                edit={edit} />
            }
        </div>
    )
}
export default ActivityList;