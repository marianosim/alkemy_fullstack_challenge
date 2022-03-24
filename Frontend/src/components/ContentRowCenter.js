import React from 'react';
import ActivityList from './ActivityList';
import NewActivityForm from './NewActivityForm';

function ContentRowCenter(){

    return (
        <div className="d-sm-flex flex-wrap aligns-items-center justify-content-around mb-4">
            
            {/*<!-- Last Product in DB -->*/}
            <ActivityList />
            
        </div>
    )
}

export default ContentRowCenter;