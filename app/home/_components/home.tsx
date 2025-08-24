// home/page.tsx
"use client";
import React, { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import TimePage from "./(routes)/time/page";
import EmojiesPage from "./(routes)/emojies/page";
import AnswerPage from "./(routes)/answer/page";
import HealtPage from "./(routes)/healt/page";

const HomePage = () => {

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-50 py-6 px-4">
      <Card className="w-[90%] sm:w-2/5 h-auto sm:h-[80%] p-6 flex flex-col items-center space-y-6">
        <TimePage />
        <EmojiesPage/>
        <AnswerPage/>
        <HealtPage/>
      </Card>
    </div>
  );
};

export default HomePage;
