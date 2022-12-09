import { docService } from "../service/doc-service.js";

class DocController {

    async getDocsByRssId(req, res, next){
     
        try {

            const { id } = req.body;

            const docs = await docService.getDocsByRssId(id);

            return res.json(docs);

        } catch (e) {
            next(e);
        }
    }
}

export const docController = new DocController();