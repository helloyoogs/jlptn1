'use client';
import React, {Fragment, useEffect, useLayoutEffect, useState} from "react";
import {test} from "@/app/constants/const";
import './test.css'
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {useParams} from "next/navigation";
import {useSession} from "next-auth/react";
import {isKeyObject} from "util/types";

interface UserAnswer {
    _id: string;
    user: string;
    testId: number;
    content: { [key: number]: number };
    __v: number;
}

{/* todo: 리팩토링,오답문제 보는 페이지,임시 저장한 페이지 해당 문제 들어가면 풀던 그대로 보여주기,제출하기 누르면 임시저장한 데이터는 오답문제 데이터로 */
}

export default function Page() {
    const id = useParams()?.id;
    const testId = test[Number(id)];
    const {data: session} = useSession();
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [userAnswerData, setUserAnswerData] = useState<UserAnswer>();
    const questionLength = testId.n1.reduce((total, item) => total + item.question.length, 0)
    const userEmail = session?.user?.email;
    const userAnswerDataContent = userAnswerData?.content || {}
    useEffect(() => {
        if (userEmail) {
            fetch(`/api/testData?testId=${testId.id}&user=${userEmail}&submit=false`, {
                method: "GET"
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(1, res);
                    setUserAnswerData(res);
                });
        }
    }, [selectedAnswers, userEmail]);

    const handleFindData = async () => {
        try {
            const response = await fetch(`/api/testData?testId=${testId.id}&user=${userEmail}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setUserAnswerData(data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleSave = async () => {
        try {
            if (userAnswerData) {
                const response = await fetch(`/api/testData?testId=${testId.id}&user=${userEmail}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ content: selectedAnswers, submit: false }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Data saved successfully:', data);
            } else {
                const response = await fetch('/api/testData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user: userEmail, testId: testId.id, content: selectedAnswers, submit: false }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Data saved successfully:', data);
            }
            handleFindData();
        } catch (error) {
            console.error('Error handling save:', error);
        }
    };


    const handleSubmit = async () => {
        if(userAnswerData){
            const response = await fetch(`/api/testData?testId=${testId.id}&user=${userEmail}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({content: selectedAnswers, submit: true}),
            });
            const data = await response.json();
        } else{
            const response = await fetch('/api/testData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user:userEmail,testId: testId.id, content: selectedAnswers, submit: true}),
            });
            const data = await response.json();
        }
        handleFindData();
    };

    const handleAnswer = (questionNumber: number, answer: number) => {
        setSelectedAnswers((prevAnswers) => ({...prevAnswers, [questionNumber]: answer}));
    };


    useEffect(() => {
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
                                                                className={`question_choice_box ${selectedAnswers[question.number] === optionIndex + 1 || userAnswerDataContent[question.number] === optionIndex + 1 ? 'active' : ''}`}
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
                                            </div>
                                            <div className={'question_item_wrap'}>
                                                {question.options?.slice(2, 4).map((option: string | React.ReactNode, optionIndex: number) => (
                                                    <Fragment key={optionIndex}>
                                                        <div className={'question_item'}>
                                                            <div
                                                                className={`question_choice_box ${selectedAnswers[question.number] === optionIndex + 3 || userAnswerDataContent[question.number] === optionIndex + 3 ? 'active' : ''}`}
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
                                                            className={`question_choice_box ${selectedAnswers[question.number] === optionIndex + 1 || userAnswerDataContent[question.number] === optionIndex + 1 ? 'active' : ''}`}
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
                    {session &&
                        <div className={'save_box'}>
                            {questionLength === Object.keys(selectedAnswers).length?
                                <button className={'submit'} onClick={handleSubmit}>
                                    提出
                                </button>
                                :
                                <button className={'save'} onClick={handleSave}>
                                臨時貯蔵
                                </button>
                            }
                        </div>
                    }
                </div>
                <Footer/>
            </div>
        </div>
    )
}