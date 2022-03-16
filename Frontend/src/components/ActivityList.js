import React from 'react';
import { useEffect, useState } from 'react';
import ListRow from './ListRow';

function ActivityList(){
    const [activities, setActivities] = useState([])
    const getActivities = async () => {
        //Fetches data from backend API
       await fetch('http://localhost:3001/api/activities')
        .then((response) => response.json())
        .then((activities) => setActivities(activities.data))
    }
    useEffect(() => {
        getActivities()
    },[])
    
    return(
        
        // Encabezados Listado de Productos 
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Descripción</th>
                                <th>Monto</th>
                                <th>Tipo</th>
                                <th>Categoría</th>
                                <th>Fecha</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                        <tr>
                                <th>Descripción</th>
                                <th>Monto</th>
                                <th>Tipo</th>
                                <th>Categoría</th>
                                <th>Fecha</th>
                                
                            </tr>
                        </tfoot>
                        <tbody>
                             {
                            activities?.map( ( row , i) => {
                                return <ListRow { ...row} key={i}/>
                            })
                            }
                        </tbody>
                    </table>
                 </div>
            </div>
        </div>
    )
}
export default ActivityList;