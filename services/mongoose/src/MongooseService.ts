import { Service } from "decorts";
import mongoose from "mongoose";

export default class MongooseService extends Service {

    async start() {
        await mongoose.connect(this.options.server.uri, this.options.server.options);
    }

    async stop() {
        await mongoose.disconnect();
    }
}