import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import { router } from "./router/index.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);


if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(path.resolve(), '../client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(path.resolve(), '../client', 'build', 'index.html'))
    })
}

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("DB connected");
    app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
}).catch( e => console.log(e));