import React, { Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class EditStore extends Component {
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
   
        const updateQuan = {
            "p_prodkey" : this.state.p_prodkey,
            "pq_currstock": this.state.pq_currstock,
            "pq_restockdate": this.state.pq_restockdate,
            "pq_availability": this.state.pq_availability
        }

        axios.put('http://localhost:8080/EditStore2/', updateQuan)
            .then(res => console.log(res.data))
        
        const updateProd = {
            "p_prodkey" : this.state.p_prodkey,
            "p_name": this.state.p_name,
            "p_type": this.state.p_type,
            "p_material": this.state.p_material,
            "p_brand": this.state.p_brand,
            "p_rating": this.state.p_rating,
            "p_retailprice": this.state.p_retailprice,
        }

        axios.put('http://localhost:8080/Edit/', updateProd)
            .then(res => console.log(res.data))

        const updateStore = {
            "p_prodkey" : this.state.p_prodkey,
            "st_name": this.state.st_name
        }

        axios.put('http://localhost:8080/EditStore1/', updateStore)
            .then(res => console.log(res.data))
    

        this.setState({
            'p_prodkey': '',
            'p_name': '',
            'p_type': '',
            'p_material': '',
            'p_brand': '',
            'p_rating': '',
            'p_retailprice': '',
            'pq_currstock': '',
            'pq_restockdate': '',
            'p_availability': '',
            'st_name': ''
        })
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
                <h2>Update an Existing Product</h2>
                
                
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
                   
                    <input type="Submit" value="Edit Item" className="btn btn-primary"/>
                
                </form>
            </div>
            </div>
            </Fragment>
         );
    }
}
 
export default EditStore;