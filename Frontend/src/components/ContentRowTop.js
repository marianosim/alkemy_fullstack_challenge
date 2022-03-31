import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import CardContent from './CardContent';

function ContentRowTop(){
    return(
        <React.Fragment>
				<div className="container-fluid">				
					{/*<!-- Content Row Categories-->*/}
                    <CardContent />
					<ContentRowCenter />
	
				</div>

        </React.Fragment>
    )

}
export default ContentRowTop;