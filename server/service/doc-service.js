import fs from "fs";
import path from "path";
import Parser from "rss-parser";

import { RSSdocModel } from "../models/rssdoc-model.js";
import { RSSLinkModel } from "../models/rsslink-model.js";
import { ApiError } from "../exceptions/api-error.js";

class DocService {

    async getDoc(id) {
        const doc = await RSSdocModel.findById(id);
        return doc;
    }    

    async getDocsByRssId(id) {
        const link = await RSSLinkModel.findById(id);
        return link.documents;
    }

    async getAllDocs() {
        const docs = await RSSdocModel.find();
        return docs;
    }

    async createDoc(url) {        

        let feed;

        try {
            feed = await this.parse(url);     
        } catch (error) {
            return null;
        }
        
        const doc = await RSSdocModel.create({ date: new Date() });

        const serverPath = path.join( path.join(), "data", doc._id.toString() + ".json" );        
        await this.writeFile(serverPath, feed);

        doc.serverPath = serverPath;
        doc.save();

        return doc;
    }

    async deleteDocs(documents) {        

        try {
            documents.forEach(async objID => {
                const doc = await RSSdocModel.findByIdAndDelete(objID);
                console.log(doc.serverPath);
                fs.unlinkSync(doc.serverPath);
            });           
        } catch (e) {
            throw ApiError.ServerError(`Не удалось удалить файлы!`); 
        }
    }

    async parse(url) {
       const parser = new Parser();
       const feed = await parser.parseURL(url); 
       return feed;
    }

    async writeFile(fpath, feed) {
        try {
            fs.writeFileSync(fpath, JSON.stringify(feed));
        } catch (e) {
            throw ApiError.ServerError(`Не удалось записать файл на диск!`); 
        }
    }
}

export const docService = new DocService();