import ConnectBling from '../services/bling.service';
import ObjectToXml from '../helpers/bling/objectToXml';

export default class BlingModel {
    static async insertOrdered(data) {
        const arrayXml = await new ObjectToXml(data).xmlModel();
        const resultArray = [];

        arrayXml.forEach((element) => resultArray.push(new ConnectBling('/pedido/json/').post({
            xml: element,
        })));
        return Promise.all(resultArray).catch((error) => {
            throw new Error(error);
        });
    }
}