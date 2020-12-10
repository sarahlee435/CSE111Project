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
};

export const ProductKey = (req, res) =>{
    Data.all("SELECT * FROM Product GROUP BY p_prodkey ORDER BY p_prodkey", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};

export const ProductName = (req, res) =>{
    Data.all("SELECT * FROM Product GROUP BY p_name, p_prodkey ORDER BY p_name, p_prodkey", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};

export const ProductType = (req, res) =>{
    Data.all("SELECT * FROM Product GROUP BY p_type, p_name ORDER BY p_type, p_name", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};

export const ProductMat = (req, res) =>{
    Data.all("SELECT * FROM Product GROUP BY p_material, p_name ORDER BY p_material, p_name", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};

export const ProductBrand = (req, res) =>{
    Data.all("SELECT * FROM Product GROUP BY p_brand, p_name ORDER BY p_brand, p_name", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};

export const ProductRating = (req, res) =>{
    Data.all("SELECT * FROM Product GROUP BY p_rating, p_name ORDER BY p_rating DESC", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};

export const ProductPrice = (req, res) =>{
    Data.all("SELECT * FROM Product GROUP BY p_retailprice, p_name ORDER BY p_retailprice ASC", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};


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
    Data.all("SELECT o_orderkey, c_name, s_name, o_totalcost, o_orderdate, o_orderstatus, l_shipdate, l_receiptdate FROM Supplier, Customer, Orders, Lineitem where l_supplykey = s_suppkey AND l_orderkey = o_orderkey AND c_custkey = o_custkey GROUP BY o_orderkey;", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};


//This table has product, store, and product quantity tables
export const Store = (req, res) =>{
    Data.all("SELECT p_prodkey, p_name, p_type, p_material, p_brand, p_rating, p_retailprice, pq_currstock, pq_restockdate, pq_availability, st_name FROM Product, ProductQuantity, Store WHERE p_prodkey = pq_prodkey AND p_prodkey = st_product;", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(row));    
    })
};

export default Data;

export const EditStore1 = (req, res) =>{
    const sql = 'UPDATE Store SET st_product = ?, st_name = ? WHERE st_product = ?'

    Data.serialize(()=>{
        Data.run(sql, [req.body['p_prodkey'], req.body['st_name'], req.body['p_prodkey']], (err, row)=>{
        if(err)
            console.log(err)
        else
           console.log("EDITED")
        
    })
})
};

export const EditStore2 = (req, res) =>{
    const sql = 'UPDATE ProductQuantity SET pq_prodkey = ?, pq_currstock = ?, pq_restockdate = ?, pq_availability = ? WHERE pq_prodkey = ?'
    
    Data.serialize(()=>{
        Data.run(sql, [req.body['p_prodkey'], req.body['pq_currstock'], req.body['pq_restockdate'], req.body['pq_availability'], req.body['p_prodkey']], (err, row)=>{
        if(err)
            console.log(err)
        else
           console.log("EDITED")
        
    })
})
};



export const DeleteQuantity = (req, res) =>{
 
    Data.serialize(()=>{
        Data.each("DELETE FROM ProductQuantity WHERE pq_prodkey = ?", [req.params.p_prodkey], (err, row)=>{    
            if(err){
                console.log(err);
            }else{
                console.log("DELETED");
            }
        })
    })
};

export const DeleteStore = (req, res) =>{
 
    Data.serialize(()=>{
        Data.each("DELETE FROM Store WHERE st_product = ?", [req.params.p_prodkey], (err, row)=>{    
            if(err){
                console.log(err);
            }else{
                console.log("DELETED");
            }
        })
    })
};

export const AddStore = (req, res) =>{

    const input = {
        'p_prodkey': req.body['p_prodkey'][0], 
        'st_name': req.body['st_name'][0]
    }

    const sql = "INSERT INTO Store VALUES(?,?)"

    Data.serialize(()=>{

        Data.run(sql, input['p_prodkey'], input['st_name'], (err,row)=>{
            if(err){
                console.log(err);
            }else{
                res.send(row);
                console.log("ADDED");
            }
        })
    })
};

export const AddQuantity = (req, res) =>{

    const input = {
        'p_prodkey': req.body['p_prodkey'][0], 
        'pq_currstock': req.body['pq_currstock'][0], 
        'pq_restockdate': req.body['pq_restockdate'][0], 
        'pq_availability': req.body['pq_availability'][0]
    }

    const sql = "INSERT INTO ProductQuantity VALUES(?,?,?,?)"

    Data.serialize(()=>{

        Data.run(sql, input['p_prodkey'], input['pq_currstock'], input['pq_restockdate'], input['pq_availability'], (err,row)=>{
            if(err){
                console.log(err);
            }else{
                res.send(row);
                console.log("ADDED");
            }
        })
    })
};
