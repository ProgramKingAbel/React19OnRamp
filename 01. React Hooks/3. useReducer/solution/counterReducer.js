import { useReducer } from 'react';

const initialState = { counter: 0 };

const counterReducer = (state, action) => {
        switch (action.type) {
                case "increment":
                        return {...state, counter: state.counter + 1 }

                case "decrement":
                        return {...state, counter: state.counter - 1}

                case "incrementByAmount":
                        return {...state, counter: state.counter + action.payload}

                case "decrementByAmount":
                        return {...state, counter: state.counter - action.payload }

                default:
                        return state;
                break;
        }
}


export { initialState, counterReducer };
