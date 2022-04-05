import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import MainContent from './MainContent';

function ContentWrapper() {
 
  return (
    <React.Fragment>
      <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
            
            <TopBar />
            <MainContent />
            <Footer />
         </div>
      </div>
    </React.Fragment>
  );
}

export default ContentWrapper;