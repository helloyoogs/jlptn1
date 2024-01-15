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
                    testId: req.query.testId,
                });
                if (findData) {
                    console.log('Data found successfully');
                    res.status(200).json(findData);
                } else {
                    res.status(404).json({ message: 'Data not found' });
                }
            } catch (error) {
                console.error('Error finding data from MongoDB:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;

        case 'POST':
            try {
                const data = new DataModel({
                    user:req.body.user,
                    testId: req.body.testId,
                    content: req.body.content,
                    submit:req.body.submit
                });
                await data.save();
                console.log('Data saved successfully');
                res.status(201).json({ message: 'Data saved successfully' });
            } catch (error) {
                console.error('Error saving data to MongoDB:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;

        case 'DELETE':
            // Delete data entry by testId
            try {
                const deletedData = await DataModel.findOneAndDelete({
                    user:req.body.user,
                    testId: req.body.testId,
                });
                if (deletedData) {
                    console.log('Data deleted successfully');
                    res.status(200).json({ message: 'Data deleted successfully' });
                } else {
                    res.status(404).json({ message: 'Data not found' });
                }
            } catch (error) {
                console.error('Error deleting data from MongoDB:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;

        case 'PUT':
            // Update data entry by testId
            try {
                const updatedData = await DataModel.findOneAndUpdate(
                    { user:req.body.user,testId: req.body.testId },
                    { content: req.body.content },
                    { new: true }
                );
                if (updatedData) {
                    console.log('Data updated successfully');
                    res.status(200).json({ message: 'Data updated successfully' });
                } else {
                    res.status(404).json({ message: 'Data not found' });
                }
            } catch (error) {
                console.error('Error updating data in MongoDB:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;

        default:
            res.status(405).json({ message: 'Method Not Allowed' });
    }
};

export default handler;