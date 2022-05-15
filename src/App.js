/* eslint-disable no-unused-vars */

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';



// CSS Files
import './css/container.css';
import './css/font.css';
import './css/sidebar.css';
import './css/card.css';
import './css/table.css';
import './css/form.css';

import Home from './components/Home';
import Home_Admin from './components/Home_Admin';
import Home_Customer from './components/Home_Customer';

import Users from './components/Users';

import Products from './components/Products';
import Add_Products from './components/Product_Add';

import User_Register from './components/User_Register';
import User_Login from './components/User_Login';
import User_Forgotpassword from './components/User_Forgotpassword';
import User_Resetpasssword from './components/User_Resetpasssword';
import Product_Update from './components/Product_Update';

//Global Variables

window.backendapi1 = "http://localhost:5001";
window.backendapi2 = "http://localhost:5000";

const App = () =>{
    return(
        <Router>
            <div className='app'>
                <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home_admin" element={<Home_Admin/>}/>
                <Route exact path="/home_customer" element={<Home_Customer/>}/>
                <Route exact path="/register" element={<User_Register/>}/>
                <Route exact path="/login" element={<User_Login/>}/>
                <Route exact path="/forgotpassword" element={<User_Forgotpassword/>}/>
                <Route exact path="/resetpassword/:resetToken" element={<User_Resetpasssword/>}/>

                <Route exact path="/customers" element={<Users/>}/>
                 
                <Route exact path="/products" element={<Products/>}/>
                {/* <Route exact path="/products" element={(props) => <Products {...props}/>}/> */}
                <Route exact path="/products_add" element={<Add_Products/>}/>
                <Route exact path="/products_update/:id" element={<Product_Update/>}/>

                </Routes>
            </div>
        </Router>
    );
}

export default App;
