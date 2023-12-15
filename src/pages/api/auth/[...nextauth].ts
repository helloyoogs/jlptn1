import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

const googleClientId: string = process.env.GOOGLE_CLIENT_ID || '';
const googleClientSecret: string = process.env.GOOGLE_CLIENT_SECRET || '';
const kakaoClientId: string = process.env.KAKAO_CLIENT_ID || '';
const kakaoClientSecret: string = process.env.KAKAO_CLIENT_SECRET || '';
const naverClientId: string = process.env.NAVER_CLIENT_ID || '';
const naverClientSecret: string = process.env.NAVER_CLIENT_SECRET || '';
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret,
        }),
        KakaoProvider({
            clientId: kakaoClientId,
            clientSecret: kakaoClientSecret
        }),
        NaverProvider({
            clientId: naverClientId,
            clientSecret: naverClientSecret
        }),
    ],
});
