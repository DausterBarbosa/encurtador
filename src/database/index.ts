import {connect} from "mongoose";

class ConnectDatabase{
    constructor(){
        this.connect();
    }

    async connect(){
        try {
            await connect("mongodb+srv://dausterBarbosa:96041482@eduzzstore.wqllw.mongodb.net/shortLinks?retryWrites=true&w=majority");
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ConnectDatabase();