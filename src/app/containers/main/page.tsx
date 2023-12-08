'use client';
import './main.css'
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {useRouter} from "next/navigation";
import React, {Fragment} from "react";
import {test} from "@/app/constants/const";

export default function Main() {
    const halfIndex = Math.ceil(test.length / 2);
    const firstHalf = test.slice(0, halfIndex);
    const secondHalf = test.slice(halfIndex);

    return (
        <div className={'main_container'}>
            <div className={'page_inner'}>
                <Header />
                <div className={'test_box_wrap'}>
                    <div className={'test_item_box'}>
                        {firstHalf.map((questionSet, setIndex) => (
                            <a key={setIndex} className={'question_box'} href={`/containers/test/` + setIndex}>
                                {questionSet.name}
                            </a>
                        ))}
                    </div>
                    <div className={'test_item_box'}>
                        {secondHalf.map((questionSet, setIndex) => (
                            <a key={halfIndex + setIndex} className={'question_box'} href={`/containers/test/` + (halfIndex + setIndex)}>
                                {questionSet.name}
                            </a>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );

}