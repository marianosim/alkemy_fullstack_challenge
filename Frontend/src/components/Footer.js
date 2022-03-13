import React from 'react';

function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto" style={{color: 'black' }}>
						<span>Copyright &copy; Activity Planner </span>
						<div style={{fontSize: '18px', padding: '12px'}}>
							<i className="fab fa-instagram" style={{padding: '5px', color:'black'}}></i>
							<i className="fab fa-facebook"style={{padding: '5px'}}></i>
							<i className="fab fa-twitter"style={{padding: '5px'}}></i>
							<i className="fab fa-github"style={{padding: '5px'}}></i>
						</div>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;