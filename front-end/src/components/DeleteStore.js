import React, { Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class DeleteStore extends Component {
    constructor({match}){
        super(match);
        this.state = {
            p_prodkey: match.params.Key,
            p_name: match.params.Name,
            p_type: match.params.Type,
            p_material: match.params.Material,
            p_brand: match.params.Brand,
            p_rating: match.params.Rating,
            p_retailprice: match.params.Price,
            pq_currstock: match.params.CurrStock,
            pq_availability: match.params.Available,
            pq_restockdate: match.params.Restock,
            st_name: match.params.Store
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

        axios.delete('http://localhost:8080/Delete/' + this.state.p_prodkey)
            .then(res => console.log(res.data))

        axios.delete('http://localhost:8080/DeleteQuantity/' + this.state.p_prodkey)
            .then(res => console.log(res.data))
    
        axios.delete('http://localhost:8080/DeleteStore/' + this.state.p_prodkey)
            .then(res => console.log(res.data))
    

    }

    render() { 
        return ( 
            <Fragment>
                <div style = {{backgroundColor: "#FFD7D7"}}>
                    <div style = {{backgroundColor: "#FFBABA"}}>
                        <Navbar>
                            <div className = "collapse navbar-collapse">
                                <ul className = "navbar-nav mr-auto">
                                    <li className="navbar-item px-2">
                                        <Link to="/Stores">Back</Link>
                                    </li>
                                </ul>    
                            </div>
                        </Navbar>
                    </div>
                 
            
            <div className = 'container' style={{marginTop: 20}}>
                <h2>Delete an Existing Product</h2>
                
                
                <form onSubmit={this.onSubmit}>
                    <div className = "form-group">
                        <label>Product Key: </label>
                        <input  type="text"
                                className="form-control"
                                name='p_prodkey'
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

                    <div className = "form-group">
                        <label>Current Stock: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'pq_currstock'
                                value={this.state.pq_currstock}
                                onChange={this.onChange}
                                />
                    </div>

                    <div className = "form-group">
                        <label>Restock Date: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'pq_restockdate'
                                value={this.state.pq_restockdate}
                                onChange={this.onChange}
                                />
                    </div>

                    <div className = "form-group">
                        <label>Availability: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'pq_availability'
                                value={this.state.pq_availability}
                                onChange={this.onChange}
                                />
                    </div>

                    <div className = "form-group">
                        <label>Store: </label>
                        <input  type="text"
                                className="form-control"
                                name = 'st_name'
                                value={this.state.st_name}
                                onChange={this.onChange}
                                />
                    </div>
                   
                    <input type="Submit" value="Delete Item" className="btn btn-info"/>
                
                </form>
            </div>
            </div>
            </Fragment>
         );
    }
}
 
export default DeleteStore;