'use client';
import './main.css'
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {useRouter} from "next/navigation";
import React, {Fragment} from "react";
import {test} from "@/app/constants/const";

export default function Main() {
    return (
        <div className={'main_container'}>
            <div className={'page_inner'}>
                <Header/>
                    <div className={'test_box_wrap'}>
                        <div className={'test_item_box'}>
                            {test.map((questionSet, setIndex) => (
                            <a key={setIndex} className={'question_box'} href={`/containers/test/`+setIndex}>
                                {questionSet.name}
                            </a>
                            ))}
                        </div>
                        <div className={'test_item_box'}>
                            {/*<a>2021年3月模擬試験</a>*/}
                            {/*<a>2021年3月模擬試験</a>*/}
                            {/*<a>2021年3月模擬試験</a>*/}
                            {/*<a>2021年3月模擬試験</a>*/}
                            {/*<a>2021年3月模擬試験</a>*/}
                        </div>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}