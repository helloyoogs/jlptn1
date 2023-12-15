'use client';
import './globals.css'
import React from "react";
import {SessionProvider, useSession} from "next-auth/react";


export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="ja">
        <head>
            <meta name={'viewport'} content="width=device-width,initial-scale=1.0"/>
            <meta charSet="Shift_JIS"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <title>日本語能力試験勉強</title>
        </head>
        <body>
        <SessionProvider>
        {children}
        </SessionProvider>
        </body>
        </html>
    )
}
