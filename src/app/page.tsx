'use client';
import { pageIndex } from "@/app/constants/const";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Main from "@/app/containers/main/page";
import { useState } from "react";

export default function Home() {
    const { data: session, status } = useSession();
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmit = async () => {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        const data = await response.json();
        console.log(data);
    };


    return (
        <>
            {status === "loading" ? <p>Loading...</p>:
                 <Main/>
            }
            <input
                type="text"
                placeholder="Name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
