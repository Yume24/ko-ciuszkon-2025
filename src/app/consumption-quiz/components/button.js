import { AiFillPlayCircle } from "react-icons/ai";


function StartButton({ onClick })
{
    return <div onClick={ onClick } className="w-60 m-4
                            border-[var(--hunter-green)]
                            rounded-3xl border-4 p-4
                            bg-[var(--yellow-green)]
                            flex-row
                            flex
                            place-content-center">
        <AiFillPlayCircle className="text-xl mt-2 mx-1"/>
        <p className="text-2xl">Rozpocznij</p>
    </div>
}

export default StartButton;