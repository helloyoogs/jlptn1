'use client';
import { pageIndex } from "@/app/constants/const";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Main from "@/app/containers/main/page";
import { useState } from "react";

export default function Home() {
    const { data: session, status } = useSession();


    return (
        <>
            {status === "loading" ? <p>Loading...</p>:
                 <Main/>
            }
        </>
    )
}
