import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';
/* paddinTop: '5px' lasa 5 pixeli distanta intre bordura si continut */

const Logo = () => {
	return (
		<div className=''>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3">
 					<img style={{paddingTop: '5px'}} alt='logo' src={brain} />
 				</div> 
			</Tilt>
		</div>
	);
}

export default Logo;