import { useState, useEffect } from "react";


function Quiz()
{
    const [rendered, setRendered] = useState(null);

    const devices = [
        {name: "Popcorn", usage: 17.2},
        {name: "Yogurt", usage: 20.0},
        {name: "Syabu", usage: 33.1},
        {name: "Subaru", usage: 21.37},
        {name: "Pagani", usage: 20.05},
        {name: "Psycha", usage: 41.0001},
        {name: "Siada", usage: 30.5},
        {name: "Fortinajti", usage: 1.0},
    ];

    let currentIndex = 1;
    let correctAnswers = 0;

    useEffect(() => {
        shuffle(devices);
        setRendered(nextQuestions());
    }, []);

    useEffect(() => {
        console.log(rendered);
    }, [rendered]);

    function testAnswer(chosen, another)
    {
        if (chosen.usage > another.usage)
        {
            correctAnswers++;
            setRendered(questionResult(true, chosen, another));
        }
        else
        {
            setRendered(questionResult(false, another, chosen));
        }
    }

    function nextQuestions(increment=false)
    {
        if (increment)
            currentIndex++;

        if (currentIndex === devices.length)
        {
            return quizResults();
        }
        return <div>
            <p onClick={() => testAnswer(devices[currentIndex - 1], devices[currentIndex])} className="bg-green-500">{devices[currentIndex - 1].name}</p>
            <p onClick={() => testAnswer(devices[currentIndex], devices[currentIndex - 1])} className="bg-blue-400">{devices[currentIndex].name}</p>
        </div>
    }

    function questionResult(isCorrect, correct, incorrect)
    {
        function getResult()
        {
            return (isCorrect ?
                    <div className="bg-green-400 m-20">OK</div> :

                    <div className="bg-red-300 m-20">NIE OK</div>
            )
        }

        return <div>
            {getResult()}

            <p>{correct.name} ma zużycie {correct.usage} kWh</p>
            <p>{incorrect.name} ma zużycie {incorrect.usage} kWh</p>

            <button onClick={() => setRendered(nextQuestions(true))}>Kontynuuj</button>
        </div>
    }

    function quizResults()
    {
        const totalAnswers = devices.length - 1;

        return <div>
            <p className="text-3xl text-center my-20">Quiz zakończony</p>

            <p className="text-xl text-center my-20">Poprawnych odpowiedzi {correctAnswers}/{totalAnswers}</p>
        </div>
    }

    function shuffle(array) {
        let currentIndex = array.length;

        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }


    return <div>{ rendered }</div>
}

export default Quiz;