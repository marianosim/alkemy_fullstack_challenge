import React from 'react';
import TopBar from './TopBar';
import ActivityList from './ActivityList';
import Footer from './Footer';
import NewActivityForm from './NewActivityForm';

function ContentWrapper() {
 
  return (
    <React.Fragment>
      <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
            <TopBar />
            <ActivityList />
            <NewActivityForm />
            <Footer />
         </div>
      </div>
    </React.Fragment>
  );
}

export default ContentWrapper;