import React, { Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            'p_prodkey': '',
            'p_name': '',
            'p_type': '',
            'p_material': '',
            'p_brand': '',
            'p_rating': '',
            'p_retailprice': ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(event){
        this.setState({
            [event.target.name] : [event.target.value]
        })
    }

    onSubmit(){

        const newProduct = {
            "p_prodkey" : this.state.p_prodkey,
            "p_name": this.state.p_name,
            "p_type": this.state.p_type,
            "p_material": this.state.p_material,
            "p_brand": this.state.p_brand,
            "p_rating": this.state.p_rating,
            "p_retailprice": this.state.p_retailprice
        }

        axios.post('http://localhost:4006/Add', newProduct)
            .then(res => console.log(res.data))

        this.setState({
            'p_name': '',
            'p_type': '',
            'p_material': '',
            'p_brand': '',
            'p_rating': '',
            'p_retailprice': ''
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
                                        <Link to="/Add">Create</Link>
                                    </li>
                                </ul>    
                            </div>
                        </Navbar>
                    </div>
                 
            
            <div className = 'container' style={{marginTop: 20}}>
                <h2>Add a new product</h2>
                <form onSubmit={this.onSubmit}>
                    <div className = "form-group">
                        <label>Product Key: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'p_prodkey'
                                value={this.state.p_prodkey}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'p_name'
                                value={this.state.p_name}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Type: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'p_type'
                                value={this.state.p_type}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Material: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'p_material'
                                value={this.state.p_material}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Brand: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'p_brand'
                                value={this.state.p_brand}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Rating: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'p_rating'
                                value={this.state.p_rating}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className = "form-group">
                        <label>Price: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'p_retailprice'
                                value={this.state.p_retailprice}
                                onChange={this.onChange}
                                />
                    </div>
                    <div>
                        <input type="Submit" value="Create Item" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
            </div>
            </Fragment>
         );
    }
}
 
export default Create;