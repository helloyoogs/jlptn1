'use client';
import React, {Fragment, useEffect, useLayoutEffect, useState} from "react";
import {test} from "@/app/constants/const";
import './test.css'
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {useParams} from "next/navigation";
import {useSession} from "next-auth/react";

export default function Page() {
    const id = useParams()?.id;
    const testId = test[Number(id)];
    const {data: session} = useSession();
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [userAnswerData, setUserAnswerData] = useState<number[]>([]);
    const questionLength = testId.n1.reduce((total, item) => total + item.question.length, 0)
    const userEmail = useSession().data?.user?.email;


    const handleSave = async () => {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user: userEmail, testId: testId.id, content: selectedAnswers}),
        });
        const data = await response.json();
        console.log(data);
    };

    const handleSubmit = async () => {
        if (questionLength === selectedAnswers.length) {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user: userEmail, testId: testId.id, content: selectedAnswers}),
            });

            const data = await response.json();
            console.log(data);
        } else {
            alert('문제를 전부 풀어주세요!');
        }
    };

    const handleAnswer = (questionNumber: number, answer: number) => {
        console.log('handleAnswer called with questionNumber:', questionNumber, 'and answer:', answer);
        setSelectedAnswers((prevAnswers) => ({...prevAnswers, [questionNumber]: answer}));
    };
    useEffect(() => {
        console.log(selectedAnswers);
    }, [selectedAnswers]);
    const RenderQuestionBox = () => {
        return testId.n1?.map((questionSet, setIndex) => (
            <div key={setIndex} className={'question_box'}>
                <div className={'question_box_title'}>{questionSet.title}</div>
                <div className={'question_item_box_wrap'}>
                    {questionSet.question.map((question, questionIndex) => (
                        <Fragment key={questionIndex}>
                            {question.qReading && <div className={'question_q_reading_box'}>{question.qReading}</div>}
                            <div className={'question_item_box'}>
                                <p className={'question_text'}>{question.number}.{question.q}</p>
                                <div
                                    className={question.line === 4 ? 'answer_box_4' : question.line === 2 ? 'answer_box_2' : 'answer_box'}>
                                    {question.line === 2 ?
                                        <>
                                            <div className={'question_item_wrap'}>
                                                {question.options?.slice(0, 2).map((option: string | React.ReactNode, optionIndex: number) => (
                                                    <Fragment key={optionIndex}>
                                                        <div className={'question_item'}>
                                                            <div
                                                                className={`question_choice_box ${selectedAnswers[question.number] === optionIndex + 1 ? 'active' : ''}`}
                                                                onClick={() => handleAnswer(question.number, optionIndex + 1)}>
                                                                <div
                                                                    className={'question_choice_number'}>{optionIndex + 1}</div>
                                                                <div className={'question_choice_text'}>
                                                                    {option}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Fragment>
                                                ))}
                                                {question.options?.slice(2, 4).map((option: string | React.ReactNode, optionIndex: number) => (
                                                    <Fragment key={optionIndex}>
                                                        <div className={'question_item'}>
                                                            <div
                                                                className={`question_choice_box ${selectedAnswers[question.number] === optionIndex + 1 ? 'active' : ''}`}
                                                                onClick={() => handleAnswer(question.number, optionIndex + 3)}>
                                                                <div className={"question_choice_number"}>
                                                                    {optionIndex + 3}</div>
                                                                <div className={'question_choice_text'}>{option}</div>
                                                            </div>
                                                        </div>
                                                    </Fragment>
                                                ))}
                                            </div>
                                        </>
                                        :
                                        <>
                                            {question.options?.map((option: string | React.ReactNode, optionIndex: number) => (
                                                <Fragment key={optionIndex}>
                                                    <div className={'question_item'}>
                                                        <div
                                                            className={`question_choice_box ${selectedAnswers[question.number] === optionIndex + 1 ? 'active' : ''}`}
                                                            onClick={() => handleAnswer(question.number, optionIndex + 1)}>
                                                            <div className={"question_choice_number"}>
                                                                {optionIndex + 1}
                                                            </div>
                                                            <div className={'question_choice_text'}>{option}</div>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            ))}
                                        </>
                                    }
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        ))
    }
    return (
        <div className={'test_container'}>
            <div className={'page_inner'}>
                <Header/>
                <div className={'page_inner_wrap'}>
                    <div className={'question_box_wrap'}>
                        <div className={'question_box_wrap_name'}>{testId.name}</div>
                        {RenderQuestionBox()}
                    </div>
                    {session ?
                        <div className={'save_box'}>
                            <button className={'save'} onClick={handleSave}>
                                臨時貯蔵
                            </button>
                            <button className={'submit'} onClick={handleSubmit}>
                                提出
                            </button>
                        </div>
                        : null
                    }
                </div>
                <Footer/>
            </div>
        </div>
    )
}