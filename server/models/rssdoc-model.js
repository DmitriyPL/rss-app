import { Schema, model } from "mongoose";

const schema = new Schema({
    date: { type: Date, required: true },
    serverPath: { type: String },
})

export const RSSdocModel = model('RSSdoc', schema);