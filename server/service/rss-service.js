import { docService } from "../service/doc-service.js";
import { userService } from "../service/user-service.js";
import { ApiError } from "../exceptions/api-error.js";
import { RSSLinkModel } from "../models/rsslink-model.js";

import {LinkDto} from "../dtos/link-dto.js"

class RssService {

    async getLink(id) {
        const link = await RSSLinkModel.findById(id);
        return new LinkDto(link);
    }

    async getAllLinks() {
        const links = await RSSLinkModel.find();
        const dtoLinks = links.map(link => new LinkDto(link));
        return dtoLinks;
    }

    async createRss(url, title) {        

        const candidate = await RSSLinkModel.findOne({ url });

        if (candidate) {
            throw ApiError.BadRequest(`Рассылка по ссылке ${url} уже существует!`)
        }
        
        const rssTitle = title ? title : (new Date()).toString();
        const rssLink = await RSSLinkModel.create({ url, title: rssTitle });
        
        const doc = await docService.createDoc(url);
        
        if (!doc) {
            await rssLink.delete();
            throw ApiError.BadRequest(`Уточните ссылку << ${url} >> !`);
        }
        
        rssLink.documents.push(doc);
        await rssLink.save();

        const user = await userService.getUser();
        user.rssList.push(rssLink);
        await user.save();

        return new LinkDto(rssLink);
    }

    async updateRss(id) {        

        const rssLink = await RSSLinkModel.findById(id);

        if (!rssLink) {
            throw ApiError.BadRequest(`Рассылки по ${id} не существует!`);
        }
        
        const doc = await docService.createDoc(rssLink.url);
        rssLink.documents.push(doc);
        rssLink.save();

        return new LinkDto(rssLink);
    }

    async deleteRss(id) {        

        console.log(id)

        const rssLink = await RSSLinkModel.findById(id);

        if (!rssLink) {
            throw ApiError.BadRequest(`Рассылки c id < ${id} > не существует!`);
        }
        
        await docService.deleteDocs(rssLink.documents);
        const linkID = rssLink._id;

        await userService.removeRssLink(linkID);

        rssLink.delete();

        return linkID;
    }

}

export const rssService = new RssService();