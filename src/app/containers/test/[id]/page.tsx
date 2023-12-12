'use client';
import React, {Fragment} from "react";
import {test} from "@/app/constants/const";
import './test.css'
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {useParams} from "next/navigation";

export default function Page() {
    const id = useParams().id;
    const testId = test[Number(id)];

  const  RenderQuestionBox = () => {
      return testId.n1?.map((questionSet, setIndex) => (
          <div key={setIndex} className={'question_box'}>
              <div className={'question_box_title'}>{questionSet.title}</div>
              <div className={'question_item_box_wrap'}>
                  {questionSet.question.map((question, questionIndex) => (
                      <Fragment key={questionIndex}>
                          {question.qReading &&  <div className={'question_q_reading_box'} >{question.qReading}</div>}
                      <div className={'question_item_box'} >
                          <p className={'question_text'}>{question.number}.{question.q}</p>
                          <div className={question.line === 4 ? 'answer_box_4' : question.line === 2 ? 'answer_box_2' : 'answer_box'}>
                              {question.line === 2 ?
                                  <>
                                      <div className={'question_item_wrap'}>
                                          <div className={'question_item'}>1 {question.a1}</div>
                                          <div className={'question_item'}>2 {question.a2}</div>
                                      </div>
                                      <div className={'question_item_wrap'}>
                                          <div className={'question_item'}>3 {question.a3}</div>
                                          <div className={'question_item'}>4 {question.a4}</div>
                                      </div>
                                  </>
                                  :
                                  <>
                                      <div className={'question_item'}>1 {question.a1}</div>
                                      <div className={'question_item'}>2 {question.a2}</div>
                                      <div className={'question_item'}>3 {question.a3}</div>
                                      <div className={'question_item'}>4 {question.a4}</div>
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
                </div>
                <Footer/>
            </div>
        </div>
    )
}