const mongoose = require('mongoose')
const dotenv = require('dotenv')

const connectDb = async () => {
  
  dotenv.config({ path: 'config.env'})
  const dbUser = process.env.DB_USER
  const dbPass = process.env.DB_PASS

  mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@crud-application.moklujf.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`🟢 Connection established with Crud Application `);
  })
  .catch((err) => {
    console.log(`🔴 Error connecting to Database because ${err}`);
    return
  })
}

module.exports = connectDb