import React from 'react';

function ListRow(props){
   
    return (
        /* <!-- Filas en listado de productos --> */
               <tr style={{textAlign: 'center'}}>
                         <td>{props?.description || 'Loading...'}</td>
                         <td>${props?.amount || 'Loading...'}</td>
                         <td style={{ color: '#858796'}}>{props?.type || 'Loading...'}</td>
                         <td>{props?.categories.name || 'Loading...'}</td>
                </tr>  

           
        )
    }
    
        

export default ListRow;