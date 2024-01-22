'use client';
import './main.css'
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import React from "react";
import {test} from "@/app/constants/const";

export default function Main() {
    const halfIndex = Math.ceil(test.length / 2);
    const firstHalf = test.slice(0, halfIndex);
    const secondHalf = test.slice(halfIndex);
    return (
        <div className={'main_container'}>
            <div className={'page_inner'}>
                <Header/>
                <div className={'page_inner_wrap'}>
                    <div className={'test_item_box'}>
                        {firstHalf.map((questionSet, setIndex) => (
                            <div className={'question_box_wrap'}>
                                <div key={setIndex} className={'question_box'}>
                                    {questionSet.name}
                                </div>
                                <select name={"test"}>
                                    <option value={"result"}>응시결과</option>
                                    <option value={"reset"}>다시풀기</option>
                                    <option value={"incorrect"}>틀린문제풀기</option>
                                    <option value={"delete"}>응시기록삭제</option>
                                </select>
                            </div>
                        ))}
                    </div>
                    <div className={'test_item_box'}>
                        {secondHalf.map((questionSet, setIndex) => (
                            <div className={'question_box_wrap'}>
                            <div className={'question_box'}>
                                {questionSet.name}
                            </div>
                                <a key={halfIndex + setIndex} className={'question_box_text'}
                                   href={`/containers/test/` + (halfIndex + setIndex)}>응시하기</a>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );

}