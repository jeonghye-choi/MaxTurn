import { MongoClient } from "mongodb"
import nextConnect from "next-connect"

const Client = new MongoClient(
  "mongodb+srv://admin:admin@cluster0.kjrlb.mongodb.net/<pnu_sgm_stockdata>?retryWrites=true&w=majority",
  {}
)

async function databaseTest(req, res, next) {
  if (!clientInformation.inConnected()) await client.connect()
  req.dbClient = client
  req.db = client.db("")
  return next()
}

const middleware = nextConnect()

middleware.use(databaseTest)

export default middleware

// Client.connect(
//   "mongodb+srv://admin:admin@cluster0.kjrlb.mongodb.net/<pnu_sgm_stockdata>?retryWrites=true&w=majority",
//   function (error, db) {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log("connected:" + db)
//       db.close()
//     }
//   }
// )
