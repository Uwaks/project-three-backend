import mongoose from 'mongoose'
import { dbURI } from ''

export function connectToDb() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
  return mongoose.connect(dbURI, opts)
}

export function flushDb() { 
  if (mongoose.connection.readyState !== 0){
    const { collections } = mongoose.connection

    const promises = Object.keys(collections).map(collection =>
      mongoose.connection.collection(collection).deleteMany({})
    )

    return Promise.all(promises)
  }
}

export function disconnectDb() {
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect()
  }
}