import React, { Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import Button from 'react-bootstrap/Button';
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
        <td>
            <Link to = {{pathname:`/Edit/${item.list.p_prodkey}/${item.list.p_name}/${item.list.p_type}/${item.list.p_material}/${item.list.p_brand}/${item.list.p_rating}/${item.list.p_retailprice}`}}>Edit</Link>
        </td> 
        <td>
            <Link to = {{pathname:`/Delete/${item.list.p_prodkey}/${item.list.p_name}/${item.list.p_type}/${item.list.p_material}/${item.list.p_brand}/${item.list.p_rating}/${item.list.p_retailprice}`}}>Delete</Link>
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
        fetch('http://localhost:4006/Products')
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
                <div className = 'container'>
                    <h3 style = {{paddingTop: '40px', paddingBottom:'40px'}}>Product Inventory</h3>
                    <div>
                    <Row>
                    <Link to="/Add"><p>Create New Product</p></Link>
                    </Row>
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
            </Fragment>
        )
    }
}

export default List;