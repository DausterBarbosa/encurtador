import {Request, Response} from "express";

import {nanoid} from "nanoid";

import ShortLink from "../database/models/shortLink";

class ShortLinkController{
    async create(req:Request, res:Response){ 
        const {url} = req.body;

        const shortlink = await ShortLink.findOne({original_link:url});

        if(shortlink){
            return res.status(200).json(shortlink);
        }

        const hash = nanoid(10);

        const newshortlink = await ShortLink.create({
            original_link: url,
            hash,
            short_link: `http://localhost:3000/${hash}`,
        });

        return res.status(200).json(newshortlink);
    }

    async redirect(req:Request, res:Response){
        const {hash} = req.params;

        const shortlink = await ShortLink.findOne({hash});

        if(shortlink){
            return res.redirect(shortlink.original_link);
        }

        return res.status(404).json({"status":"Not Found"});
    }
}

export default new ShortLinkController();