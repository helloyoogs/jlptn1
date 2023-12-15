'use client'
import {signIn, signOut, useSession} from "next-auth/react"

function Login() {

    return (
        <div>
            <button onClick={() => signIn("google", { callbackUrl: "/" })} >구글 로그인</button>
            <button onClick={() =>signOut()} >구글 로그아웃</button>
        </div>

    )
}

export default Login