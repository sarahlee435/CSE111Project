import express from 'express';
import {Products, EditProduct, DeleteProduct, AddProduct, Orders, Store} from '../Connection/Connection.js';

const routes = express.Router();

//This makes the routes to the front-end code. Shows up as http://localhost:4006/Products in the front end components classes. 
routes.get('/Products', Products);

routes.get('/Orders', Orders);

routes.get('/Store', Store);

routes.put('/Edit', EditProduct);

routes.post('/Add', AddProduct);

routes.delete('/Delete/:p_prodkey', DeleteProduct);

export default routes;

