const { MongoClient } = require("mongodb");

const uri =
  "mongodb://localhost:27017/?maxPoolSize=20&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

client.connect();

module.exports = () => {
  return client.db('fd_mongo');
};