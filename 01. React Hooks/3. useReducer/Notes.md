# useReducer Hook

- useReducer is a hook that is similar to useState, but it is designed for more complex state objects or state transitions that involve multiple sub-values.

- It allows you to manage state in a functional and immutable way.

## Syntax

```javascript

const [ state, dispatch ] = useReducer(reducer, initialState);

```

- `initialState` - the starting value for the state when the component first renders.
- `reducer` - This is a fuction that describes how the state should change based on actions. It takes the current state and an action as inputs and returns a new state
- `state` - The current state value which you can use in your component
- `dispatch` - A function that you can call to send actions to the reducer, which then updates the state.