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

export default Data;

