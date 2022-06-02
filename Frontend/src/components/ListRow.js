import React from 'react';

function ListRow(props){
    let date = new Date(props.created_at);
   
    return (
        //Rows in transactions list
               <tr style={{textAlign: 'center'}}>
                         <td>{props?.description || 'Loading...'}</td>
                         <td>{props?.type || 'Loading...'}</td>
                         <td>{props?.type === 'Ingreso' ? '$'+props?.amount || 'Loading...' : '-$'+ props?.amount || 'Loading...'}</td>
                         <td>{props?.categories.name || 'Loading...'}</td>
                         <td>{date.toISOString().slice(0, 10) || 'Loading...'}</td>
                         <td><button className="btn btn-primary" onClick={props.handleEdit} data-id={props.id}>Editar</button></td>
                         <td>
                             <form onSubmit={props.handleDelete}>
                                 <input type='text' hidden defaultValue={props.id}/>
                                 <button className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                             </form>
                             </td>
                </tr>  

           
        )
    }
    
        

export default ListRow;