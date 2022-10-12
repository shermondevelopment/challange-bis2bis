import mongoose from 'mongoose'

const connectDb = mongoose.connect(process.env.DB_MOONGOSE as string)

export default connectDb
