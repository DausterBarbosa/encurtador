require('dotenv/config');

import {connect} from "mongoose";

class ConnectDatabase{
    constructor(){
        this.connect();
    }

    async connect(){
        try {
            await connect(`${process.env.DATABASE_URL_CONNECT}`);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ConnectDatabase();