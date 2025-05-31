import StartButton from "@/app/consumption-quiz/components/button";


function ConsumptionQuiz()
{
    return <div className="flex flex-col justify-items-center">
        <p className="text-5xl text-center my-20">Sprawdź czy wiesz, jakie urządzenia pobierają więcej energii elektrycznej</p>

        <StartButton />
    </div>
}

export default ConsumptionQuiz;