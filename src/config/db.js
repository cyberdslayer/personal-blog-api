require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');

const pool = mysql.createPool({
  host: process.env.DB_HOST ,
  port: process.env.DB_PORT ,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME,
  ssl: { 
    rejectUnauthorized: true,
    ca: fs.readFileSync("../../../safety/ca.pem").toString(),
  }, 
  
});

pool.getConnection()
  .then(() => console.log('✅ Connected to Aiven MySQL (SSL)'))
  .catch(err => console.error('❌ MySQL connection failed:', err));

module.exports = pool;
