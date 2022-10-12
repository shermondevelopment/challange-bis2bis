import mongoose, { Schema } from 'mongoose'

export interface UniversityInterface {
  state_province: string | null
  alpha_two_code: string
  web_pages: Array<string>
  country: string
  name: string
  domains: Array<string>
}

const universitySchema = new Schema({
  state_province: { type: String, default: null },
  alpha_two_code: { type: String, minLength: 2 },
  web_pages: { type: Array, default: [] },
  country: { type: String, require: true },
  name: { type: String, require: true },
  domains: { type: Array, default: [] }
})

const universityModel = mongoose.model<UniversityInterface>(
  'university',
  universitySchema
)
export default universityModel
