import React, {useState, useEffect, Component } from 'react';
import logo from '../images/logo.png';
import axios from 'axios';
import {Redirect, withRouter} from 'react-router-dom';

const Sidebar_Customer = ({ history}) => {

    const [sidebar, setSidebar] = useState(false);

    const openSidebar = () => setSidebar(!sidebar);
   
//     const [error, setError] = useState("");
//     const [privateData, setPrivateData] = useState("");

//     useEffect(() => {
//         if(!localStorage.getItem("userToken")){
//             history.push('/');
//         }
    

//     const fetchPrivateData = async () => {
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("userToken")}`
//             }
//         }

//         try {
//             const {data} = await axios.get(`${window.backendapi}/user`, config);
            
//         } catch (error) {
//             localStorage.removeItem("userToken");
//             history.push('/');
//         }
//     }

//     fetchPrivateData();
// }, [ history ]);   

// const userLogoutHandler = () =>{
//     localStorage.removeItem("userToken");
//     history.push('/');
// }

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
                    <img className="sidebar-image" src={logo} alt="Logo"/>
                    </div>
                    <ul onClick={openSidebar}>
                        <li><a href="/home_customer"><i className="fa fa-home"></i>&nbsp;&nbsp;Home</a></li>
                        {/* <li><a href="/customer_profile"><i className="fa fa-user"></i>&nbsp;&nbsp;Profile</a></li> */}
                        <li><a href="/customer_orders"><i className="fas fa-box"></i>&nbsp;&nbsp;Orders</a></li>
                        {/* <li><a href="#"  onClick={userLogoutHandler} ><i className="fa fa-power-off"></i>&nbsp;&nbsp;Sign Out</a></li> */}
                        <li><a href="#" ><i className="fa fa-power-off"></i>&nbsp;&nbsp;Sign Out</a></li>
                    </ul>
                </nav>


            </>
    )
}

// export default withRouter(Sidebar_Customer);
export default Sidebar_Customer;