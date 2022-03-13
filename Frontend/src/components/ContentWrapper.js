import React from 'react';
import TopBar from './TopBar';
import ActivityList from './ActivityList';

function ContentWrapper() {
 
  return (
    <React.Fragment>
      	<div >
          <TopBar />
          <ActivityList />
        </div>
    </React.Fragment>
  );
}

export default ContentWrapper;