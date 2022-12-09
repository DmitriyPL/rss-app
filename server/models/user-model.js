import { Schema, model } from "mongoose";

const schema = new Schema({
    nickname: { type: String, unique: true, required: true },
    rssList: [ { type: Schema.Types.ObjectId, ref: 'RSSLink' } ]
})

export const UserModel = model('User', schema);


