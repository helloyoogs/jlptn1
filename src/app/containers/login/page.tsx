'use client'
import { useSession, signIn, signOut } from "next-auth/react"

function Login() {
    const { data: session } = useSession()
    console.log(session)
    return (
        <div>
            <button onClick={() => signIn("google", { callbackUrl: "/" })} >로그인</button>
        </div>
    )
}

export default Login