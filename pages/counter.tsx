import {counterAction, counterPayload} from '../store/counter';
import {useSelector, useDispatch } from 'react-redux'

const Counter = () => {

    const {count} = useSelector(counterPayload)
    const dispatch = useDispatch()

    const increaseHandler = ()=>{
        dispatch(counterAction.increase())
    }

    const decreaseHandler = ()=>{
        dispatch(counterAction.decreaseByFive(5))
    }
    
    return (
        <div>

            {count}

            <button onClick={increaseHandler}> Increase </button>
            <button onClick={decreaseHandler}> Decrease By 5 </button>
        </div>
    )
}

export default Counter
