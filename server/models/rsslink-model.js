import { Schema, model } from "mongoose";

const schema = new Schema({
    title: { type: String },
    url: { type: String, required: true, unique: true },
    documents: [ { type: Schema.Types.ObjectId, ref: 'RSSdoc' } ]
})

export const RSSLinkModel = model('RSSLink', schema);