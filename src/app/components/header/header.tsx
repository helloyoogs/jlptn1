import '../header/header.css'
import {signIn, signOut, useSession} from "next-auth/react";
import {useEffect} from "react";

export default function Header() {
    const {data: session} = useSession();
    console.log(session);
    useEffect(() => {

    });
    return (
        <header>
            <div className={'header_nav'}>
                <a className={'home_img'} href={'/containers/main'}></a>
                <a href={'/containers/main'}>ホーム</a>
                {session ?
                    <>
                        <a onClick={() => signOut({callbackUrl: "/"})}>ログアウト</a>
                        <a href={'/containers/my'}>マイページ</a>
                    </>
                    :
                    <a onClick={() => signIn("google", {callbackUrl: "/"})}>ログイン</a>
                }
            </div>
        </header>
    )
}