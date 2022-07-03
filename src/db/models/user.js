const client = require('../index');

module.exports = () => {
  const db = client();

  return db.collection('users');
}