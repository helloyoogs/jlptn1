import React from "react";
import {test} from "@/app/constants/const";
import '../test/test.css'
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

interface TestItem {
    title: string;
    question: {
        number: number;
        q: React.ReactNode;
        a1: string;
        a2: string;
        a3: string;
        a4: string;
    }[];
}

interface TestProps {
    test: {
        name: string;
        n1v: TestItem[];
        n1g: {
            link: string;
            title: string;
        };
        n1r: {
            link: string;
            title: string;
        };
    }[];
}

export default function Test() {
    return (
        <div className={'test_container'}>
            <div className={'page_inner'}>
                <Header/>
                <div className={'page_inner_wrap'}>
                    {test.map((testItem, index) => (
                        <div key={index} className={'question_box_wrap'}>
                            <div className={'question_box_wrap_name'}>{testItem.name}</div>
                            {testItem.n1v?.map((questionSet, setIndex) => (
                                <div key={setIndex} className={'question_box'}>
                                    <div className={'question_box_title'}>{questionSet.title}</div>
                                    <div className={'question_item_box_wrap'}>
                                        {questionSet.question.map((question, questionIndex) => (
                                            <div className={'question_item_box'} key={questionIndex}>
                                                <p>{question.number}.{question.q}</p>
                                                <ul className={'answer_box'}>
                                                    <li>①{question.a1}</li>
                                                    <li>②{question.a2}</li>
                                                    <li>③{question.a3}</li>
                                                    <li>④{question.a4}</li>
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <Footer/>
            </div>
        </div>
    )
}