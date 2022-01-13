const mysql = require("mysql");
const util = require("util");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "efendiayyas",
  database: "db_app_penjualan",
  port: 3306,
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    return console.error(`error: ${err.message}`);
  }
  console.log(`Connected to mysql server`);
});

const query = util.promisify(db.query).bind(db);

module.exports = { db, query };
