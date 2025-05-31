import StartButton from "@/app/consumption-quiz/components/button";


function ConsumptionQuiz()
{
    return <div className="flex flex-col items-center">
        <p className="text-5xl text-center my-20">Sprawdź czy wiesz, które urządzenia pobierają więcej energii elektrycznej</p>

        <StartButton />
    </div>
}

export default ConsumptionQuiz;