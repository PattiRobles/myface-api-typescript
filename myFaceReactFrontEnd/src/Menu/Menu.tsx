import react from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/Ti'
import {SlClose} from 'react-icons/Sl'
import './Menu.scss'
import { useState } from 'react';

export function Menu () {

	const [menuOpen, setMenuOpen] = useState(false)



     return( 
			<nav>
				{!menuOpen && <TiThMenu 
				className='menu-icon' 
				size='40px' 
				color='white'
				onClick={() => setMenuOpen(!menuOpen)}/>}

				{menuOpen && <SlClose 
								className='menu-icon'
								size='40px' 
								color='white' 
								onClick={() => setMenuOpen(!menuOpen)} />}


			{menuOpen && <div className="menu-container">
				<Link to="/" className="menu-item">Home</Link>
				<Link to="/posts" className="menu-item">Posts</Link>
				<Link to="/users" className="menu-item">Users</Link>
				<Link to="/posts/create" className="menu-item">+ Posts</Link> 
				<Link to="/users/create" className="menu-item">+ Users</Link>
			</div>}
			</nav>
			
		
    
    );
  }

  export default Menu;