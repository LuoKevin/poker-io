const { Pool } = require('pg');

const DB_URI = 'postgres://xujffset:FdxL7QGvOguSrWd9M88uTba2D_bcfWjz@drona.db.elephantsql.com:5432/xujffsset';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: DB_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
