import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    const {mongo} = req.databases;
    return mongo.negotiation.find({}).toArray().then((negotiations) => res.status(200).json(negotiations));
});

router.get('/reports', (req, res) => {
    const {mongo} = req.databases;
    return mongo.negotiation.aggregate([
        {
            $group:
                {
                    _id: '$created_at',
                    totalAmount: {$sum: '$value'},
                    count: {$sum: 1},
                },
        },
        {$sort: {count: 1}},
    ]).toArray().then((negotiations) => res.status(200).json(negotiations));
});

export default router;