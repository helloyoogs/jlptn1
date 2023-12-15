'use client'
import { useSession, signIn, signOut } from "next-auth/react"

function Login() {
    const { data: session } = useSession()
    return (
        <div>
            <button onClick={() => signIn("google", { callbackUrl: "/" })} >구글 로그인</button>
            <button onClick={() => signIn("kakao", { callbackUrl: "/" })} >카카오 로그인</button>
            <button onClick={() => signIn("naver", { callbackUrl: "/" })} >네이버 로그인</button>
        </div>

    )
}

export default Login