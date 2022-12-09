import { rssService } from "../service/rss-service.js";

class RssController {

    async addRss(req, res, next){
        try {

            const { url, title } = req.body;

            const rss = await rssService.createRss(url, title);

            return res.json(rss);

        } catch (e) {
            next(e);
        }
    }

    async updateRss(req, res, next){
        try {

            const { id } = req.body;

            const rss = await rssService.updateRss(id);

            return res.json(rss);

        } catch (e) {
            next(e);
        }        
    }

    async deleteRss(req, res, next){
        try {

            const { id } = req.body;

            const rss = await rssService.deleteRss(id);

            return res.json(rss);

        } catch (e) {
            next(e);
        }        
    }

    async getAllRssLinks(req, res, next){
        try {

            const rssLinks = await rssService.getAllLinks();

            return res.json(rssLinks);

        } catch (e) {
            next(e);
        }
    }


}

export const rssController = new RssController();