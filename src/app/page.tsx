'use client';
import {pageIndex} from "@/app/constants/const";
import Link from "next/link";
import {useSession} from "next-auth/react";
import Main from "@/app/containers/main/page";
import Login from "@/app/containers/login/page";

export default function Home() {
    const { data: session } = useSession();
    console.log(session);
    return (
        session?<Main/>:<Login/>
  )
}
