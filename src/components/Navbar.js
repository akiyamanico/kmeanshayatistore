import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const Navbar = () => {
    // const [name, setName] = useState('');
    const navigate = useNavigate();
 

 
    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="container">
                
 
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/" className="navbar-item">
                            Home
                        </a>
                    </div>
 
                    <div className="navbar-end">
                        <div className="navbar-item">
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
 
export default Navbar