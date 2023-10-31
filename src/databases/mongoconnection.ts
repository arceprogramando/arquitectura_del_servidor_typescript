import mongoose, { type Connection } from 'mongoose'

const { DB_HOST, DB_PORT, DB_NAME, DB_CNN } = process.env

const configConnection = {
  url: `${DB_CNN}${DB_NAME}` ?? `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
}

console.log(configConnection.url)
const mongoDBConnection = async (): Promise<Connection> => {
  return await mongoose.connect(configConnection.url)
    .then((connect) => connect.connection)
    .catch((error) => {
      throw error
    })
}

export default mongoDBConnection
