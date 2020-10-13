import { MongoClient } from 'mongodb';
import Collection from './schema/negotiation';

export default class Mongo {
    constructor(config = {}, options = {}) {
        this.config = config.envs;
        this.options = options;
    }

    start() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.config.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
                .then((connection) => connection.db(this.config.MONGO_DATABASE))
                .then((db) => {
                    Collection(db, this.config);
                    resolve(this.wrapper(db));
                })
                .catch((err) => reject(err));
        });
    }

    // eslint-disable-next-line class-methods-use-this
    wrapper(dbmongo) {
        return new Proxy(dbmongo, {
            get(target, key) {
                return target[key] || target.collection(key);
            },
        });
    }
}