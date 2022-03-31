import React from 'react';
import ActivityList from './ActivityList';


function ContentRowCenter(){

    return (
        <div className="d-sm-flex flex-wrap aligns-items-center justify-content-around mb-4">
            <ActivityList />
        </div>
    )
}

export default ContentRowCenter;