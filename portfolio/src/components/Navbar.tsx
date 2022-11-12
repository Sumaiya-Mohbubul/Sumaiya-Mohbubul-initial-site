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
        <div>
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
                    <NavLink to="/home" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'greenyellow' })} className="nav-link" onClick={handleCollapse}>
                        Projects
                    </NavLink>
                    <NavLink to="/home" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'greenyellow' })} className="nav-link" onClick={handleCollapse}>
                        Links
                    </NavLink>
                    {/*<div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navRef}>
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0 w-100 d-flex align-items-start align-items-lg-center">
                            <DarkSwitch />
                        </div>
                    </div> */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
