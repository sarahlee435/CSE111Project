import express from 'express';
import {Products, EditProduct, DeleteProduct, AddProduct, Orders, Store, EditStore1, EditStore2, AddStore, AddQuantity, DeleteQuantity, DeleteStore} from '../Connection/Connection.js';
import {ProductKey, ProductName, ProductType, ProductMat, ProductBrand, ProductRating, ProductPrice} from '../Connection/Connection.js';

const routes = express.Router();

//This makes the routes to the front-end code. Shows up as http://localhost:8080/Products in the front end components classes. 
routes.get('/Products', Products);
routes.post('/Add', AddProduct);
routes.put('/Edit', EditProduct);
routes.delete('/Delete/:p_prodkey', DeleteProduct);

//Sorting Routes
routes.get('/ProductKey', ProductKey);
routes.get('/ProductName', ProductName);
routes.get('/ProductType', ProductType);
routes.get('/ProductMat', ProductMat);
routes.get('/ProductBrand', ProductBrand);
routes.get('/ProductRating', ProductRating);
routes.get('/ProductPrice', ProductPrice);

//Detailed Product Table
routes.get('/Store', Store);
routes.post('/AddStore', AddStore);
routes.post('/AddQuantity', AddQuantity);
routes.put('/EditStore1', EditStore1);
routes.put('/EditStore2', EditStore2);
routes.delete('/DeleteStore/:p_prodkey', DeleteStore);
routes.delete('/DeleteQuantity/:p_prodkey', DeleteQuantity);

//Order table
routes.get('/Orders', Orders);

export default routes;

