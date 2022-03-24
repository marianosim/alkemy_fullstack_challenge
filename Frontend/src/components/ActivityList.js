import React from 'react';
import { useEffect, useState } from 'react';
import ListRow from './ListRow';
import NewActivityForm from './NewActivityForm';

function ActivityList(){
    const [activities, setActivities] = useState([])
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [message, setMessage] = useState("");
    const [edit, setEdit] = useState(false);
    const [dataToEdit, setDataToEdit] = useState([]);
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
        const response = await fetch('http://localhost:3001/api/activities/' + obj.dataset.id);
        const data = await response.json()
        setEdit(true);
        setDataToEdit(data.data)
        console.log(data)
    }
    
    let handleEdit = (e) => {
      editActivity(e.target)
    }
    
     const handleForm = async (e) => {
        e.preventDefault();
        setDescription(e.target.value);
          setAmount(e.target.value)
          setType(e.target.value)
          setCategory_id(e.target.value)
        let data = {
            description: description,
            amount: amount,
            type: type,
            category_id: category_id
          }
        
          if(edit) {
              let res = await fetch(`http://localhost:3001/api/activities/${dataToEdit.id}`, {
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
              });
              await res.json();
          }else {
          let res = await fetch('http://localhost:3001/api/activities/create', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(data),
          });
          await res.json();
          if (res.status === 200) {
            setDescription("");
            setAmount("");
            setType("");
            setCategory_id("");
            setMessage("Movimiento creado con éxito");
          } else {
            setMessage("Ocurrió un problema");
          }
        }
      };
      
    
    return(
        
        // Encabezados Listado de Productos 
        <div className="d-sm-flex flex-wrap aligns-items-center justify-content-between mb-4 ">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Descripción</th>
                                <th>Tipo</th>
                                <th>Monto</th>
                                <th>Categoría</th>
                                <th>Fecha</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                        <tr>
                                <th>Descripción</th>
                                <th>Tipo</th>
                                <th>Monto</th>
                                <th>Categoría</th>
                                <th>Fecha</th>
                                
                            </tr>
                        </tfoot>
                        <tbody>
                             {
                            activities.map( ( row , i) => {
                                return <ListRow { ...row} key={i} handleEdit={handleEdit}/>
                            })
                            }
                        </tbody>
                    </table>
                 </div> 
            </div>
            <div className='form-responsive p-5'>
            <NewActivityForm 
            function={handleForm}
            description={edit ? dataToEdit.description : ''}
            amount={edit ? dataToEdit.amount : ''}
            type={edit ? dataToEdit.type : ''}
            category_id={edit ? dataToEdit.category_id : ''}
            message={message}
            edit={edit} />
            
            </div>
           
        </div>
    )
}
export default ActivityList;