import { connectToMongoDB } from '../../../../db';

const My = async () => {
    try {
        // Connect to MongoDB
        const client = await connectToMongoDB();


        console.log('MongoDB operations completed');


        return 'sdd';

    } catch (error) {
        console.error('Error in My module:', error);
        return 'Error occurred';
    }
};

export default My;
