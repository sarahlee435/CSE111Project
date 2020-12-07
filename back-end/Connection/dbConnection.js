import sqlite3 from 'sqlite3';

//Connects the backend to the art supply database
let Data = new sqlite3.Database('./art-supply.db', sqlite3.OPEN_READWRITE , (err)=>{
    if(err)
        console.log(err);
    else
        console.log("Success");
})

export default Data;