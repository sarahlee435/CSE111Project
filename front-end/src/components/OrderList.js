import React, { Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
                              
const Orders = item => (
    <tr>
        <td>{item.list.o_orderkey}</td>
        <td>{item.list.c_name}</td>
        <td>{item.list.s_name}</td>
        <td>{item.list.o_totalcost}</td>
        <td>{item.list.o_orderdate}</td>
        <td>{item.list.o_orderstatus}</td>
        <td>{item.list.l_shipdate}</td> 
        <td>{item.list.l_receiptdate}</td> 
        <td> 
            <Link to = {{pathname:`/Edit/${item.list.o_orderkey}/${item.list.c_name}/${item.list.s_name}/${item.list.o_totalcost}/${item.list.o_orderdate}/${item.list.o_orderstatus}/${item.list.l_shipdate}/${item.list.l_receiptdate}`}}>Edit</Link>
        </td> 
    </tr>
)

class OrderList extends Component{
    constructor({match}){
    super(match);
        this.state = {
            list: []
        }
      
    }

    componentDidMount(){
        this.getOrders();
    }

    getOrders(){
        fetch('http://localhost:4006/Orders')
            .then(res => res.json())
            .then(result => this.setState({list:result}))
    }

    OrderList(){
        return this.state.list.map (function(current, i){
            return <Orders list = {current} key = {i} />
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
                                </ul>    
                            </div>
                        </Navbar>
                    </div>
                 


                <div className = 'container'>
                    <h3 style = {{paddingTop: '40px', paddingBottom:'40px'}}>Order Received</h3>
                   
                    <div>
                    <Table className = "table table-striped" variant = 'light' bordered responsive>
                        <tr>
                            <th>Order Key</th>
                            <th>Customer</th>
                            <th>Supplier</th>
                            <th>Total Cost</th>
                            <th>Date Ordered</th>
                            <th>Order Status</th>
                            <th>Date Shipped</th>
                            <th>Date Recieved</th>                 
                        </tr>
                    
                        <tbody>
                            {this.OrderList()}
                        </tbody>
                    </Table>
                    </div>
                </div>
                </div>
            </Fragment>
        )
    }
}

export default OrderList;