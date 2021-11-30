import { useRouter } from "next/router"

const Game = () => {
    const router = useRouter()

    const goBack = ()=>{
        router.replace("me")
    }
    return (
        <div>
            Hello world
            <button onClick={goBack}>This is it</button>
        </div>
    )
}

export default Game
