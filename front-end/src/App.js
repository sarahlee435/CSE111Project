import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import EditOrder from "./components/EditProduct"
import Orders from "./components/OrderList";
import Delete from "./components/DeleteProduct";
import Create from "./components/CreateProduct";
import Edit from "./components/EditOrder";
import Home from "./components/Home";

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
                    <Route path = '/EditOrder/:Key/:Customer/:Supplier/:Cost/:Orderdate/:Status/:Shipdate/:Receiptdate'  component = {EditOrder} />
                </div>
            </Router>
        );
    }
}
 
export default App;

//:Key/:Name/:Type/:Material/:Brand/:Rating/:Price