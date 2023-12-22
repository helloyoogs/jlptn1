const { MongoClient } = require('mongodb');

const MONGO_URI = process.env.MONGO_URI;

async function connectToMongoDB() {
    try {
        // Connect to MongoDB
        const client = new MongoClient(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000, // Increase this value if needed
        });
        // Perform operations with the database if needed
        // Example: const result = await client.db('user').collection('your-collection-name').insertOne({ key: 'value' });

        console.log('MongoDB operations completed');

        // Close the connection when done
        client.close();

        return 'sdd'; // or whatever value you want to return

    } catch (error) {
        console.error('Error in My module:', error);
        return 'Error occurred'; // or handle the error as needed
    }
}

export { connectToMongoDB };
