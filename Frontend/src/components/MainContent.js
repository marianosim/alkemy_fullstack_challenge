import React, { useState, useEffect} from 'react';
import CardContent from './CardContent';
import ActivityList from './ActivityList';
import NewTransactionForm from './NewTransaction';
import EditTransactionForm from './EditTransaction';

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

    // Gets especifica transaction data to edit 
    const editActivity = async (obj) => {
        setEdit(false)
        await fetch('http://localhost:3001/api/activities/' + obj.dataset.id)
        .then((response) => response.json())
        .then((data) => setDataToEdit(data.data))
        setEdit(true)
    }
    
    // Edit form is completed with selected transaction to edit
    const handleEdit = (e) => {
      editActivity(e.target)
    }
      
    // Edits transaction with the new data 
      const handleEditForm = async (e) => {
        e.preventDefault();
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
       
      // Makes a soft delete of the transaction      
      const handleDelete = async(e) => {
        e.preventDefault();
        await fetch(`http://localhost:3001/api/activities/delete/${e.target[0].value}`, {
            method: 'DELETE'
        });
        getActivities();
    };

    
    return(
        <React.Fragment>
            <div>
                <div className="sm-flex flex-wrap justify-content-around mb-4">	
                    <div className='row'>
                            {/*<!-- Main Content -->*/}
                        <CardContent activities={activities}/>
                        <div className="d-flex flex-wrap justify-content-center mb-4 container">
                            {/*<!-- List of transactions -->*/}
                            <div style={{paddingRight: '10%'}}> 
                            <ActivityList activities={activities}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete} />  
                            </div>
                         </div>
                    </div>			
			    </div>
                {/*<!-- Conditional rendering. Add or edit transaction -->*/}
                <div className='transactions-bar'>
                    {edit ||
                            <NewTransactionForm 
                            getActivities={getActivities} />
                    }
                    {edit &&
                        
                        <EditTransactionForm 
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