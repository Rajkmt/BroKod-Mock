"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Webcam from "react-webcam";

const StartInterview = ({ params }) => {
  const [interViewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [webCamEnabled, setWebCamEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    console.log(
      "🚀 ~ file: page.jsx:18 ~ GetInterviewDetails ~ jsonMockResp:",
      jsonMockResp
    );
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };

  const startInterview = () => {
    setWebCamEnabled(true);
    setAudioEnabled(true);
  };

  const endInterview = () => {
    setWebCamEnabled(false);
    setAudioEnabled(false);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1">
        {webCamEnabled && (
          <Webcam
            audio={audioEnabled}
            videoConstraints={{
              facingMode: "user",
            }}
            className="w-3/4 h-auto"
          />
        )}
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Questions */}
          <QuestionsSection
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
          />
          {/* Video or audio recording */}
          <RecordAnswerSection
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            interviewData={interViewData}
          />
        </div>
        <div className="flex justify-end gap-6">
          {activeQuestionIndex > 0 && (
            <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>
              Previous Question
            </Button>
          )}
          {activeQuestionIndex != mockInterviewQuestion?.length - 1 && (
            <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>
              Next Question
            </Button>
          )}
          {activeQuestionIndex == mockInterviewQuestion?.length - 1 && (
            <Link href={'/dashboard/interview/' + interViewData?.mockId + '/feedback'}>
              <Button>End Interview</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartInterview;
