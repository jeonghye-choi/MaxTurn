import nextConnect from "next-connect"
import middleware from "../../middleware/database"

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  console.log(req)
  console.log(req.db)
  console.log(req.db.collection("Results"))
  console.log(req.db.collection("Results").find({}, { Winning_rate: 1 }))
  console.log(req.db.collection("Results").find({}, { Winning_rate: 1 }))
  console.log(req.db.Results)
  console.log(req.db.Results.find({}, { Winning_rate: 1 }))

  let doc = await req.db
    .collection("Results")
    .find({}, { Winning_rate: 1, _id: 0 })
  res.json(doc)
})
export default handler

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({
//     win: 70,
//     lose: 30
//   })
// }
