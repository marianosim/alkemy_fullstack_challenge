import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import MainContent from './MainContent';

function ContentWrapper() {
 
  return (
    <React.Fragment>
      <div id="content-wrapper" className="d-flex flex-column bg-light">
         <div>
            
            <TopBar />
            <MainContent />
            <Footer />
         </div>
      </div>
    </React.Fragment>
  );
}

export default ContentWrapper;