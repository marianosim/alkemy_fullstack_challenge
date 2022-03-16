import React from 'react';
import TopBar from './TopBar';
import ActivityList from './ActivityList';
import Footer from './Footer';
import NewActivityForm from './NewActivityForm';
import CardContent from './CardContent';

function ContentWrapper() {
 
  return (
    <React.Fragment>
      <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
            <TopBar />
            <CardContent />
            <ActivityList />
            <NewActivityForm />
            <Footer />
         </div>
      </div>
    </React.Fragment>
  );
}

export default ContentWrapper;