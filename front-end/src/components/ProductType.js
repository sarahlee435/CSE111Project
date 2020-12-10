import React, { Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
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
        <td>
            <Link to = {{pathname:`/Edit/${item.list.p_prodkey}/${item.list.p_name}/${item.list.p_type}/${item.list.p_material}/${item.list.p_brand}/${item.list.p_rating}/${item.list.p_retailprice}`}}>Edit</Link>
        </td> 
        <td>
            <Link to = {{pathname:`/Delete/${item.list.p_prodkey}/${item.list.p_name}/${item.list.p_type}/${item.list.p_material}/${item.list.p_brand}/${item.list.p_rating}/${item.list.p_retailprice}`}}>Delete</Link>
        </td>
    </tr>
)

class Type extends Component{
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
        fetch('http://localhost:8080/ProductType')
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
                    <h3 style = {{paddingTop: '40px', paddingBottom:'20px'}}>Product Inventory</h3>
                    <div style = {{paddingLeft: '20px'}}>
                        <Row>
                            <Link to="/Add"><p>Create New Product</p></Link>
                        </Row>
                    </div>
                    <Dropdown class='mr-auto'>
                        <Dropdown.Toggle id="dropdown-custom-components" variant ="primary">
                         Sort By
                        </Dropdown.Toggle>
                            <Dropdown.Menu >
                                <Dropdown.Item ><Link to = {{pathname :`/`}}>Key</Link></Dropdown.Item>
                                <Dropdown.Item ><Link to = {{pathname :`/ProductName`}}>Name</Link></Dropdown.Item>
                                <Dropdown.Item ><Link to = {{pathname :`/ProductType`}}>Type</Link></Dropdown.Item>
                                <Dropdown.Item ><Link to = {{pathname :`/ProductMat`}}>Material</Link></Dropdown.Item>
                                <Dropdown.Item ><Link to = {{pathname :`/ProductBrand`}}>Brand</Link></Dropdown.Item>
                                <Dropdown.Item ><Link to = {{pathname :`/ProductRating`}}>Rating</Link></Dropdown.Item>
                                <Dropdown.Item ><Link to = {{pathname :`/ProductPrice`}}>Price</Link></Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                    <div>
                    <Table className = "table table-striped" variant = 'light' bordered responsive>
                        <tr>
                            <th>Key</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Material</th>
                            <th>Brand</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Edit</th>   
                            <th>Delete</th>                
                        </tr>
                    
                        <tbody>
                            {this.ProductList()}
                        </tbody>
                    </Table>
                    </div>
                </div>
                </div>
            </Fragment>
        )
    }
}

export default Type;