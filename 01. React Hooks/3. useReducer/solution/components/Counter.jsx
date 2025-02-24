import { useState, useReducer } from 'react';
import { initialState, counterReducer } from '../CounterReducer.js';

const Counter = () => {

        const [ state, dispatch ] = useReducer(counterReducer, initialState);
        const [num, setNum] = useState(0);

        return (
                <div>
                        <h1>Counter {state.counter}</h1>
                        <button onClick={() => dispatch({ type: "increment" })}>Increment Counter</button>
                        <button onClick={() => dispatch({type: "decrement"})}>Decrement Counter</button>

                        <div>
                        <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />

                        <button onClick={() => dispatch({ type: 'incrementByAmount', payload: +num})}>Add counter by {num}</button>
                        <button onClick={() => dispatch({ type: 'decrementByAmount', payload: +num })}>Subtract Counter by {num}</button>
        </div>
                </div>

        );

}

export default Counter;
