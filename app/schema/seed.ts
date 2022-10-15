import mongoose, { Schema } from 'mongoose'

const seedSchema = new Schema({
  updated: { type: Boolean, default: false }
})

const modelSchema = mongoose.model('seed', seedSchema)

export default modelSchema
