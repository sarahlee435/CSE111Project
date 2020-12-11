import React, { Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class EditOrder extends Component {
    constructor({match}){
        super(match);

        this.state = {
            o_orderkey: match.params.Key,
            c_name: match.params.Customer,
            s_name: match.params.Supplier,
            o_totalcost: match.params.Cost,
            o_orderdate: match.params.Orderdate,
            o_orderstatus: match.params.Status,
            l_shipdate: match.params.Shipdate,
            l_receiptdate: match.params.Receiptdate
        }
       
        console.log(this.match);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(event){
        this.setState({
            [event.target.name] : [event.target.value]
        })
    }

    onSubmit(){
   
        const update1 = {
            "o_orderkey" : this.state.o_orderkey,
            "o_totalcost": this.state.o_totalcost,
            "o_orderdate": this.state.o_orderdate,
            "o_orderstatus": this.state.o_orderstatus
        }

        axios.put('http://localhost:4006/EditOrder1/', update1)
            .then(res => console.log(res.data))

        const update2 = {
            "o_orderkey" : this.state.o_orderkey,
            "c_name": this.state.c_name
        }


        axios.put('http://localhost:4006/EditOrder2/', update2)
            .then(res => console.log(res.data))
        
        const update3 = {
            "o_orderkey" : this.state.o_orderkey,
            "s_name": this.state.s_name
        }
    
        axios.put('http://localhost:4006/EditOrder3/', update3)
            .then(res => console.log(res.data))
        
        const update4 = {
            "o_orderkey" : this.state.o_orderkey,
            "l_shipdate": this.state.l_shipdate,
            "l_receiptdate": this.state.l_receiptdate
        }
    
        axios.put('http://localhost:4006/EditOrder4/', update4)
            .then(res => console.log(res.data))

        this.setState({
            'o_orderkey': '',
            'c_name': '',
            's_name': '',
            'o_totalcost': '',
            'o_orderdate': '',
            'o_orderstatus': '',
            'l_shipdate': '',
            'l_receiptdate':''
        })
    }

    render() { 
        return ( 
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
                 
            
            <div className = 'container' style={{marginTop: 20}}>
                <h2>Update an Existing Order</h2>
                
                
                <form onSubmit={this.onSubmit}>
                    <div className = "form-group">
                        <label>Order Key: </label>
                        <input  type="text"
                                className="form-control"
                                name='o_orderkey'
                                value={this.state.o_orderkey}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Customer: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'c_name'
                                value={this.state.c_name}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Supplier: </label>
                        <input  type="text"
                                className="form-control"
                                name = 's_name'
                                value={this.state.s_name}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Total Cost: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'o_totalcost'
                                value={this.state.o_totalcost}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Date Ordered: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'o_orderdate'
                                value={this.state.o_orderdate}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Order Status: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'o_orderstatus'
                                value={this.state.o_orderstatus}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Date Shipped: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'l_shipdate'
                                value={this.state.l_shipdate}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Date Received: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'l_receiptdate'
                                value={this.state.l_receiptdate}
                                onChange={this.onChange}
                                />
                    </div>
                   
                    <input type="Submit" value="Edit Order" className="btn btn-info"/>
                
                </form>
            </div>
            </div>
            </Fragment>
         );
    }
}
 
export default EditOrder;