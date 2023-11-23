import Image from 'next/image'
import {pageIndex} from "@/app/constants/const";
import Link from "next/link";

export default function Home() {
  return (

      pageIndex.map((p,index) => {
        return (
            <div  key={index} className={'project_manager'}>
                      <Link href={p.pages.link}>{p.name}</Link>
            </div>
        )
      })


  )
}
