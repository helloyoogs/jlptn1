import connectDB from './db';
import mongoose from 'mongoose';

const DataModel = mongoose.model('test', {
    user:String,
    testId: Number,
    content: Object,
    submit:Boolean
});
const handler = async (req, res) => {
    await connectDB();

    switch (req.method) {
        case 'GET':
            try {
                const findData = await DataModel.findOne({
                    submit:true
                });
                if (findData) {
                    console.log('GET successfully');
                    res.status(200).json(findData);
                } else {
                    res.status(404).json({ message: 'Data not found' });
                }
            } catch (error) {
                console.error('Error finding data from MongoDB:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;

    }
};

export default handler;