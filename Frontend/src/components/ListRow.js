import React from 'react';

function ListRow(props){
    let date = new Date(props.created_at);
   
    return (
        //Filas en listado de actividades
               <tr style={{textAlign: 'center'}}>
                         <td>{props?.description || 'Loading...'}</td>
                         <td>${props?.amount || 'Loading...'}</td>
                         <td>{props?.type || 'Loading...'}</td>
                         <td>{props?.categories.name || 'Loading...'}</td>
                         <td>{date.toISOString().slice(0, 10) || 'Loading...'}</td>
                </tr>  

           
        )
    }
    
        

export default ListRow;