import {Schema, model} from "mongoose";

interface ShortLinkProps{
    original_link: string,
    hash: string,
    short_link: string,
}

const schema = new Schema<ShortLinkProps>({
    original_link: {
        type: String,
        required: true,
    },
    hash: {
        type: String,
        required: true,
    },
    short_link: {
        type: String,
        required: true,
    }
});

const ShortLink = model<ShortLinkProps>("ShortLink", schema);

export default ShortLink;