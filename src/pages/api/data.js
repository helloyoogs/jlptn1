import connectDB from './db';

const mongoose = require('mongoose');

const DataModel = mongoose.model('test', {
    name: String,
    email: String,
});

const handler = async (req, res) => {
    if (req.method === 'POST') {
        await connectDB();

        // Example data
        const data = new DataModel({
            name: req.body.name,
            email: req.body.email,
        });

        try {
            await data.save();
            console.log('Data saved successfully');
            res.status(201).json({ message: 'Data saved successfully' });
        } catch (error) {
            console.error('Error saving data to MongoDB:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};

export default handler;
