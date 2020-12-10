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

//This table has the orders, customers, supplies, and lineitems connected
export const Orders = (req, res) =>{
    Data.all("SELECT o_orderkey, c_name, s_name, o_totalcost, o_orderdate, o_orderstatus, l_shipdate, l_receiptdate FROM Supplier, Customer, Orders, Lineitem where l_suppkey = s_suppkey AND l_orderkey = o_orderkey AND c_custkey = o_custkey GROUP BY o_orderkey;", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};

export const EditOrder = (req, res) =>{

    const sql = 'UPDATE Order SET o_orderkey = ?, o_totalcost = ?, o_orderdate = ?, o_orderstatus = ? WHERE o_orderkey = ?'
    const sql2 = 'UPDATE Customer SET c_name = ? WHERE o_orderkey = ?'
    const sql3 = 'UPDATE Supplier SET s_name = ? WHERE o_orderkey = ?'
    const sql4 = 'UPDATE Lineitem SET l_shipdate, l_receiptdate WHERE o_orderkey = ?'
    
    Data.serialize(()=>{
        Data.run(sql, [req.body['o_orderkey'], req.body['o_totalcost'], req.body['o_orderdate'], req.body['o_orderstatus'], req.body['o_orderkey']], (err, row)=>{
        if(err)
            console.log(err)
        else
           console.log("EDITED")
        
    })
})
    Data.serialize(()=>{
        Data.run(sql2, [req.body['c_name'], req.body['o_orderkey']], (err, row)=>{
        if(err)
            console.log(err)
        else
           console.log("EDITED")
        
    })
})
    Data.serialize(()=>{
        Data.run(sql3, [req.body['s_name'], req.body['o_orderkey']], (err, row)=>{
        if(err)
            console.log(err)
        else
           console.log("EDITED")
        
    })
})
    Data.serialize(()=>{
        Data.run(sql4, [req.body['l_shipdate'], req.body['l_receiptdate'], req.body['o_orderkey']], (err, row)=>{
        if(err)
            console.log(err)
        else
           console.log("EDITED")
        
    })
})
};

//This table has product, store, and product quantity tables
export const Store = (req, res) =>{
    Data.all("SELECT p_prodkey, p_name, st_name, p_type, p_material, p_brand, pq_currstock, pq_availability, p_rating, p_retailprice FROM Product, ProductQuantity, Store WHERE p_prodkey = pq_prodkey AND p_prodkey = st_prodkey;", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};

export default Data;

