import express from "express";
import blingModel from '../../models/bling.model';

const router = express.Router();

router.get('/insert-ordered', (req, res) => {
    const {mongo} = req.databases;
    return insertOrdered(mongo).then((status) => res.status(200).json(status));
});

async function insertOrdered(mongo) {
    try {
        const negotiationNotSent = await mongo.negotiation.find({bling_send: false}).toArray();
        if (negotiationNotSent.length > 0) {
            const newOrdered = await blingModel.insertOrdered(negotiationNotSent);
            console.log('enviado para bling', newOrdered);
            mongo.negotiation.updateMany({bling_send: false}, {$set: {bling_send: true}});
            return JSON.parse('{"result":"' + negotiationNotSent.length + ' negociações enviadas para bling"}');
        }
    } catch (error) {
        throw new Error(error);
        return false
    }
}

export default router;