import sqlite3 from 'sqlite3';
import Data from './dbConnection.js';

//Here's where the sql queries go

export const Products = (req, res) =>{
    Data.all("SELECT * FROM Product", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
}

export const EditProduct = (req, res) =>{

    const sql = 'UPDATE Product SET p_prodkey = ?, p_name = ?, p_type = ?, p_material = ?, p_brand = ?, p_rating = ?, p_retailprice = ? WHERE p_prodkey = ?'
    
    Data.serialize(()=>{
        Data.run(sql, [req.body['p_prodkey'], req.body['p_name'], req.body['p_type'], req.body['p_material'], req.body['p_brand'], req.body['p_rating'], req.body['p_retailprice'], req.body['p_prodkey']], (err, row)=>{
        if(err)
            console.log(err)
        else
           console.log("EDITED")
        
    })
})
};

export const DeleteProduct = (req, res) =>{
 
    Data.serialize(()=>{
        Data.each("DELETE FROM Product WHERE p_prodkey = ?", [req.params.p_prodkey], (err, row)=>{    
            if(err){
                console.log(err);
            }else{
                console.log("DELETED");
            }
        })
    })
};

export const AddProduct = (req, res) =>{

    const input = {
        'p_prodkey': req.body['p_prodkey'][0], 
        'p_name': req.body['p_name'][0], 
        'p_type': req.body['p_type'][0], 
        'p_material': req.body['p_material'][0], 
        'p_brand': req.body['p_brand'][0], 
        'p_rating': req.body['p_rating'][0], 
        'p_retailprice': req.body['p_retailprice'][0]
    }

    const sql = "INSERT INTO Product VALUES(?,?,?,?,?,?,?)"

    Data.serialize(()=>{

        Data.run(sql, input['p_prodkey'], input['p_name'], input['p_type'], input['p_material'], input['p_brand'], input['p_rating'], input['p_retailprice'], (err,row)=>{
            if(err){
                console.log(err);
            }else{
                res.send(row);
                console.log("ADDED");
            }
        })
    })
};
//This table has the orders,customers,supplies, and even lineitems connected
export const Orders = (req, res) =>{
    Data.all("SELECT o_orderkey AS key,Customer.c_custkey,s_suppkey,c_name AS customer,s_name AS store,o_totalcost AS total,o_orderdate AS orderdate,o_orderstatus AS status FROM Supplier INNER JOIN Customer ON Orders.o_custkey = Customer.c_custkey INNER JOIN Orders ON Lineitem.l_orderkey = Orders.o_orderkey INNER JOIN Lineitem ON Supplier.s_suppkey = Lineitem.l_suppkey;", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};
//This table has product,product, and product quantity tables
export const Store = (req, res) =>{
    Data.all(" SELECT p_prodkey AS key,p_name AS name,st_name AS store,p_type AS type,p_material AS material,p_brand AS brand,pq_currstock AS stock,pq_availability AS availability,p_rating AS rating,p_retailprice AS price FROM Product INNER JOIN ProductQuantity ON Product.p_prodkey = ProductQuantity.pq_prodkey INNER JOIN Store ON Product.p_prodkey = Store.st_prodkey;", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};
export default Data;

