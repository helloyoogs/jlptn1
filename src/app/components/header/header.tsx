import '../header/header.css'
import {signIn, signOut, useSession} from "next-auth/react";
import {useEffect} from "react";

export default function Header() {
    const {data: userData} = useSession();
    console.log(userData);
    return (
        <header>
            <div className={'header_nav'}>
                <a className={'home_img'} href={'/containers/main'}></a>
                <a href={'/containers/main'}>ホーム</a>
                {userData ?
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