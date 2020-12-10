import React, { Component, Fragment} from 'react';
import {Link} from 'react-router-dom'

import ProductList from './ProductList.js'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
                              
class Home extends Component{
    
    render(){
        return(
            <Fragment>
                <div style = {{backgroundColor: "#FFD7D7"}}>
                    <div style = {{backgroundColor: "#FFBABA"}}>
                        <Navbar>
                            <h1>Art Supply Database</h1>
                            <div className = "collapse navbar-collapse">
                                <ul className = "navbar-nav ml-auto">
                                    <li className="navbar-item px-2">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="navbar-item px-2">
                                        <Link to="/Orders">Orders</Link>
                                    </li>
                                </ul>    
                            </div>
                        </Navbar>
                    </div>
                    <ProductList/>
                </div>
            </Fragment>
        )
    }
}

export default Home;