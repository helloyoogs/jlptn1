import '../header/header.css'
import {signIn, signOut, useSession} from "next-auth/react";

export default function Header() {
    const {data: session} = useSession();
    console.log(session);
    return (
        <header>
            <div className={'header_nav'}>
                <a className={'home_img'} href={'/containers/main'}></a>
                <a href={'/containers/main'}>ホーム</a>
                {/*{ses}*/}
                {session ?
                    <a onClick={() => signOut({callbackUrl: "/"})}>ログアウト</a>
                    :
                    <a onClick={() => signIn("google", {callbackUrl: "/"})}>ログイン</a>
                }
                <a>マイパージ</a>
            </div>
        </header>
    )
}