import React, { useState, useEffect} from 'react';
import CardContent from './CardContent';
import ActivityList from './ActivityList';
import NewActivityForm from './NewActivityForm';
import EditForm from './EditForm';

function MainContent(){
    const [activities, setActivities] = useState([])
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

    
    return(
        <React.Fragment>
				<div className="sm-flex flex-wrap justify-content-around mb-4">				
					{/*<!-- Main Content -->*/}
                    <CardContent activities={activities}/>
                    <div className="d-flex flex-wrap justify-content-around mb-4 ">
                    <ActivityList activities={activities}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete} />
            
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
                    

				</div>

        </React.Fragment>
    )

}
export default MainContent;