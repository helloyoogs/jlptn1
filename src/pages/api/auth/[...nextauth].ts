import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const googleClientId: string = process.env.GOOGLE_CLIENT_ID || '';
const googleClientSecret: string = process.env.GOOGLE_CLIENT_SECRET || '';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret,
        }),
    ],
});
