//import mysql
const mysql = require("mysql2/promise");
//prepare connection paameters we use to connect to the database
const dbconfig = {
  connectionLimit: 10,
  //socketPath: process.env.DB_SOCKET_PATH,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
};

//create the connection pool
const pool = mysql.createPool(dbconfig);
async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}

module.exports = { query };
