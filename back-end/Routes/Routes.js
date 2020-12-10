import express from 'express';
import {Products, EditProduct, DeleteProduct, AddProduct, Orders, Store, EditOrder} from '../Connection/Connection.js';

const routes = express.Router();

//This makes the routes to the front-end code. Shows up as http://localhost:4006/Products in the front end components classes. 
routes.get('/Products', Products);
routes.post('/Add', AddProduct);
routes.put('/Edit', EditProduct);
routes.delete('/Delete/:p_prodkey', DeleteProduct);


routes.get('/Store', Store);

routes.get('/Orders', Orders);
routes.put('/EditOrder', EditOrder);


export default routes;

