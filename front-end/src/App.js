import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Stores from "./components/StoreList";
import Orders from "./components/OrderList";
import Delete from "./components/DeleteProduct";
import Create from "./components/CreateProduct";
import Edit from "./components/EditProduct";
import EditStore from "./components/EditStore"
import Home from "./components/Home";
import DeleteStore from "./components/DeleteStore"
import CreateStore from "./components/CreateStore"

import ProductName from "./components/ProductName";
import ProductType from "./components/ProductType";
import ProductMat from "./components/ProductMat";
import ProductBrand from "./components/ProductBrand";
import ProductRating from "./components/ProductRating";
import ProductPrice from "./components/ProductPrice";

//This is where the main routes from the Component folder to the site go.
class App extends Component {

    render() { 
        return (  
            <Router>
                <div>
                    <Route path = "/" exact component={Home} />
                    <Route path="/Add" component={Create} />
                    <Route path = '/Edit/:Key/:Name/:Type/:Material/:Brand/:Rating/:Price'  component = {Edit} />
                    <Route path = '/Delete/:Key/:Name/:Type/:Material/:Brand/:Rating/:Price'  component = {Delete} />     
                    <Route path = "/Orders" component={Orders}/>
                    <Route path = "/Stores" component={Stores}/>
                    <Route path="/CreateStore" component={CreateStore} />
                    <Route path = '/EditStore/:Key/:Name/:Type/:Material/:Brand/:Rating/:Price/:CurrStock/:Restock/:Available/:Store'  component = {EditStore} />
                    <Route path = '/DeleteStore/:Key/:Name/:Type/:Material/:Brand/:Rating/:Price/:CurrStock/:Restock/:Available/:Store'  component = {DeleteStore} />
                
                    <Route path="/ProductName" component={ProductName} />
                    <Route path="/ProductType" component={ProductType} />
                    <Route path="/ProductMat" component={ProductMat} />
                    <Route path="/ProductBrand" component={ProductBrand} />
                    <Route path="/ProductRating" component={ProductRating} />
                    <Route path="/ProductPrice" component={ProductPrice} />

                
                </div>
            </Router>
        );
    }
}
 
export default App;

//:Key/:Name/:Type/:Material/:Brand/:Rating/:Price