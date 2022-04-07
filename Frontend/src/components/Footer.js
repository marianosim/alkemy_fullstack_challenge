import React from 'react';

function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer mt-auto py-3" style={{backgroundColor: '#1986a1c4'}}>
				<div className="container-fluid my-auto">
					<div className="copyright text-center my-auto" style={{color: 'black' }}>
						<span style={{color: 'white'}}>Copyright &copy; My Bud(get) Planner </span>
						<div style={{fontSize: '18px', padding: '12px'}}>
							<i className="fab fa-instagram"></i>
							<i className="fab fa-facebook"></i>
							<i className="fab fa-twitter"></i>
							<i className="fab fa-github"></i>
						</div>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;