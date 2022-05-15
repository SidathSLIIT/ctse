import React, {useState, useEffect, Component } from 'react';
import Logo from '../images/logo.png';

export default function Sidebar() {


    const [sidebar, setSidebar] = useState(false);

    const openSidebar = () => setSidebar(!sidebar);
   

    return (
        <>


                <div className="sidebar-slide">
                    <a href="#" onClick={openSidebar}>
                        <i className="fas fa-bars"></i>
                    </a>
                </div>

                <nav className={sidebar ? 'sidebar-nav active' : 'sidebar-nav'}>
                    <a href="#" className="sidebar-close" onClick={openSidebar}>
                        <i className="fas fa-times-circle"></i>
                    </a>
                    <div>
                    <img className="sidebar-image" src={Logo} alt="Logo"/>
                    </div>
                    <ul onClick={openSidebar}>
                        <li><a href="/"><i className="fa fa-home"></i>&nbsp;&nbsp;Home</a></li>
                        <li><a href="/login"><i className="fa fa-user-shield"></i>&nbsp;&nbsp;Login</a></li>
                        <li><a href="/register"><i className="fa fa-coins"></i>&nbsp;&nbsp;Register</a></li>
                    </ul>
                </nav>


            </>
    )
}