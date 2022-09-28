const Pool = require("pg").Pool;

const pool=new Pool({
    user:"postgres",
    host:"34.72.75.30",
    database:"XRAI_T",
    password:"sai",
    port:"5432",
})

module.exports=pool;
 