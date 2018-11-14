let MongoClient = require("mongodb").MongoClient

let connect = MongoClient.connect("mongodb://localhost:27017/renew")

module.exports = connect