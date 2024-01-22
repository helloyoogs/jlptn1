import '../header/header.css'
import {signIn, signOut, useSession} from "next-auth/react";
import {useEffect} from "react";

export default function Header() {
    const {data: userData} = useSession();
    return (
        <header>
            <div className={'header_nav'}>
                <a className={'home_img'} href={'/containers/main'}></a>
                <a href={'/containers/main'}>home</a>
                {userData ?
                    <>
                        <a onClick={() => signOut({callbackUrl: "/"})}>logout</a>
                    </>
                    :
                    <a onClick={() => signIn("google", {callbackUrl: "/"})}>login</a>
                }
            </div>
        </header>
    )
}