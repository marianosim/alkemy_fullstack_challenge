import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import CardContent from './CardContent';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-around mb-4">
                   
					
					</div>
				
					{/*<!-- Content Row Categories-->*/}
                    <CardContent />
					<ContentRowCenter />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;