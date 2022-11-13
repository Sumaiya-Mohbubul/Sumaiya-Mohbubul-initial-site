import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
{/* import DarkSwitch from './navbar/DarkSwitch'; */}

function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);

    const handleCollapse = () => {
        navRef.current?.classList.remove('show');
    };

    return (
        <div className='container'>
            <nav className={`navbar navbar-dark knavbar-expand-lg fixed-top`}>
                <div className="container-fluid">
                    {/* Logo 
                    <NavLink className="navbar-brand abs" id="brand-link" to="/" onClick={handleCollapse}>
                        <Logo id="logo" /> 
                        <img src={logo} className="App-logo" alt="logo" />
                    </NavLink>*/}
                    <NavLink to="/home" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'greenyellow' })} className="nav-link" onClick={handleCollapse}>
                        Home
                    </NavLink>
                    <NavLink to="/projects" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'greenyellow' })} className="nav-link" onClick={handleCollapse}>
                        Projects
                    </NavLink>
                    <NavLink to="/articles" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'greenyellow' })} className="nav-link" onClick={handleCollapse}>
                        Articles
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
