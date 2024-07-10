import { Schema } from "mongoose";


export const RatsSchema = new Schema({
  name: { type: String, minLength: 1, maxLength: 100, default: "Dude" },
  callsign: { type: String, minLength: 1, maxLength: 100, default: "" },
  picture: { type: String, minLength: 1, maxLength: 100, default: "🐀" },
  specialties: { type: String, minLength: 1, maxLength: 100, default: "coder" }
})
// id object | country string | area string | labels array+string

