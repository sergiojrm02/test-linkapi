import express from "express";
import pipeDriveModel from '../../models/pipeDrive.model';

const router = express.Router();

router.get('/search-all-negotiation', (req, res) => {
    const {mongo} = req.databases;
    return searchAllDeal(mongo).then((status) => res.status(200).json(status));
});

async function searchAllDeal(mongo) {
    try {
        let [startNumber] = await mongo.negotiation.find({}).sort({ id: -1 }).limit(1).toArray();
        startNumber = (startNumber && startNumber.id) ? startNumber.id : 0;

        const newDeal = await pipeDriveModel.searchAllDeal(startNumber);
        if (newDeal) {
            await mongo.negotiation.insertMany(newDeal).then(() => {
                console.log('inserindo novas negociações');
                return true;
            });
        }
    } catch (error) {
        throw new Error(error);
        return false;
    }
}

export default router;