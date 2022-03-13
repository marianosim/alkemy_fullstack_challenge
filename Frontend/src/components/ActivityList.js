import React from 'react';
import { useEffect, useState } from 'react';
import ListRow from './ListRow';

function ActivityList(){
    const [activities, setActivities] = useState([])
    const getActivities = () => {
        fetch('http://localhost:3001/api/activities')
        .then((response) => response.json())
        .then((activities) => setActivities([activities.data]))
    }
    useEffect(() => {
        getActivities()
    },[])

    return(
        
        /* <!-- Encabezados Listado de Productos --> */
        <div>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Descripción</th>
                                <th>Monto</th>
                                <th>Tipo</th>
                                <th>Categoría</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                        <tr>
                                <th>Descripción</th>
                                <th>Monto</th>
                                <th>Tipo</th>
                                <th>Categoría</th>
                                
                            </tr>
                        </tfoot>
                        <tbody>
                             {
                            activities.map( ( row , i) => {
                                return <ListRow { ...row} key={i}/>
                            })
                            }
                        </tbody>
                    </table>
        </div>
        /*<div>
            <p>
                {activities?.description || 'Loading...'} {activities?.amount || 'Loading...'} {activities?.type || 'Loading...'} {activities?.categories.name || 'Loading...'}
            </p>
        </div>*/
                
    )
}
export default ActivityList;