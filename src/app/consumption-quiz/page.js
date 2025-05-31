'use client';

import StartButton from "@/app/consumption-quiz/components/button";
import Navbar from "@/app/components/Navbar";
import Quiz from "@/app/consumption-quiz/quiz";

import { useState, useEffect } from "react";


function ConsumptionQuiz()
{
    const [quizStage, setQuizStage] = useState(0);
    const [rendered, setRendered] = useState(null);

    useEffect(() => {
        setQuizStage(0);
    }, []);

    useEffect(() => {
        setRendered(getUiForStage(quizStage));
    }, [quizStage])

    function getUiForStage() {
        switch (quizStage) {
            case 0:
                return <div className="flex flex-col items-center">
                    <p className="text-5xl text-center my-20">Sprawdź czy wiesz, które urządzenia pobierają więcej
                        energii
                        elektrycznej</p>

                    <StartButton onClick={() => setQuizStage(1)}/>
                </div>
            case 1:
                return <Quiz />
            case 2:
                return <p>Wyniczki tego</p>
        }
    }

    return <div>
        <Navbar/>

        <div>{ rendered }</div>
    </div>
}

export default ConsumptionQuiz;