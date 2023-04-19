const db = require('./database');

async function getUsers(req, res) {
  const result = await db.query('SELECT * FROM users');
  return result.rows;
}

module.exports = {
  getUsers,
};
