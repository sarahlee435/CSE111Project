import React, { Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
                              
const Products = item => (
    <tr>
        <td>{item.list.p_prodkey}</td>
        <td>{item.list.p_name}</td>
        <td>{item.list.p_type}</td>
        <td>{item.list.p_material}</td>
        <td>{item.list.p_brand}</td>
        <td>{item.list.p_rating}</td>
        <td>{item.list.p_retailprice}</td>
        <td>{item.list.pq_currstock}</td> 
        <td>{item.list.pq_restockdate}</td> 
        <td>{item.list.pq_availability}</td> 
        <td>{item.list.st_name}</td> 
        <td>
            <Link to = {{pathname:`/EditStore/${item.list.p_prodkey}/${item.list.p_name}/${item.list.p_type}/${item.list.p_material}/${item.list.p_brand}/${item.list.p_rating}/${item.list.p_retailprice}/${item.list.pq_currstock}/${item.list.pq_restockdate}/${item.list.pq_availability}/${item.list.st_name}`}}>Edit</Link>
        </td> 
        <td>
            <Link to = {{pathname:`/DeleteStore/${item.list.p_prodkey}/${item.list.p_name}/${item.list.p_type}/${item.list.p_material}/${item.list.p_brand}/${item.list.p_rating}/${item.list.p_retailprice}/${item.list.pq_currstock}/${item.list.pq_restockdate}/${item.list.pq_availability}/${item.list.st_name}`}}>Delete</Link>
        </td>
    </tr>
)

class List extends Component{
    constructor({match}){
    super(match);
        this.state = {
            list: []
        }
      
    }

    componentDidMount(){
        this.getProducts();
    }

    getProducts(){
        fetch('http://localhost:8080/Store')
            .then(res => res.json())
            .then(result => this.setState({list:result}))
    }

    ProductList(){
        return this.state.list.map (function(current, i){
            return <Products list = {current} key = {i} />
        });
    }

    render(){
        const {list} = this.state

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
                                    <li className="navbar-item px-2">
                                        <Link to="/Stores">Stores</Link>
                                    </li>
                                </ul>    
                            </div>
                        </Navbar>
                    </div>
                 

                <div className = 'container'>
                    <h3 style = {{paddingTop: '40px', paddingBottom:'20px'}}>Detailed Product Inventory</h3>
                    <div style = {{paddingLeft: '20px'}}>
                        <Row>
                            <Link to="/CreateStore"><p>Create New Product</p></Link>
                        </Row>
                    </div>
                    </div>
                    <Table className = "table table-striped" variant = 'light' bordered responsive>
                        <tr>
                            <th>Key</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Material</th>
                            <th>Brand</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Current Stock</th>
                            <th>Restock Date</th>
                            <th>Available?</th>
                            <th>Store</th>
                            <th>Edit</th>   
                            <th>Delete</th>                
                        </tr>
                    
                        <tbody>
                            {this.ProductList()}
                        </tbody>
                    </Table>
                    </div>
            </Fragment>
        )
    }
}

export default List;