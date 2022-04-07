import React from 'react';


function Card(props){
    return(
        <div className="col-md-3 mb-4 mx-auto" >
            <div className={`card border-left-${props.color} align-items-center shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.title}</div>
                            <div className="h4 mb-0 font-weight-bold text-gray-800">${props.total}</div>
                        </div>
                        <div className="col-auto">
                        <i className={props.icon}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Card;