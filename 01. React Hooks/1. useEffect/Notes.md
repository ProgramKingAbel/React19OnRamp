# useEffect Hook

## Table of Contents
1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [Dependency Array Behavior](#dependency-array-behavior)
4. [Why useEffect?](#why-useeffect)
5. [Examples](#examples)
   - [Fetching Data from an API](#fetching-data-from-an-api)
   - [Direct DOM Manipulation](#direct-dom-manipulation)
   - [Setting Up and Cleaning Up an Event Listener](#setting-up-and-cleaning-up-an-event-listener)
   - [Setting Up and Cleaning Up Timers](#setting-up-and-cleaning-up-timers)
   - [Subscribing to Real-Time Updates (WebSockets)](#subscribing-to-real-time-updates-websockets)

---

## Introduction
The `useEffect` hook is used in React to handle **side effects** in functional components. Side effects include:
- Fetching data from an API
- Direct DOM manipulation
- Setting up event listeners
- Managing timers
- Establishing WebSocket connections

---

## Syntax
The basic syntax of `useEffect`:
```javascript
useEffect(callbackFn, dependencyArray);
```
Example:
```javascript
useEffect(() => {}, [])
```

---

## Dependency Array Behavior
### 1. No Dependency Array Provided
```javascript
useEffect(() => {
    console.log("Component rendered");
});
```
- The effect runs **on every render**.

### 2. Empty Dependency Array `[]`
```javascript
useEffect(() => {
    console.log("Component mounted");
}, []);
```
- The effect runs **only once** when the component mounts.

### 3. Dependency Array with Values
```javascript
useEffect(() => {
    console.log("State updated");
}, [count]);
```
- Runs **only when `count` changes**.

### 4. Incorrect Usage Inside a Conditional
```javascript
// ❌ Wrong
if (value > 0) {
    useEffect(() => { ... }, []);
}
```
- Hooks **cannot** be used conditionally.

---

## Why useEffect?
React components should be "pure" functions that only return JSX. Any logic that interacts with the outside world should be handled **separately** using `useEffect`.

---

## Examples

### Fetching Data from an API
#### Code Example:
```javascript
import { useState, useEffect } from "react";

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error("Error fetching users:", error));
    }, []);

    return (
        <ul>
            {users.map(({ id, name }) => (
                <li key={id}>{name}</li>
            ))}
        </ul>
    );
}
```
✅ **Side Effect:** Fetches user data when the component mounts.

✅ **Why useEffect?** Ensures that API calls do not block rendering.

---

### Direct DOM Manipulation
#### Code Example:
```javascript
import { useState, useEffect } from "react";

function TitleUpdater() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]);

    return <button onClick={() => setCount(prev => prev + 1)}>Click me</button>;
}
```
✅ **Side Effect:** Updates the document title.

✅ **Why useEffect?** Direct DOM manipulation should be handled separately from rendering.

---

### Setting Up and Cleaning Up an Event Listener
#### Code Example:
```javascript
import { useEffect } from "react";

function MouseTracker() {
    useEffect(() => {
        const handleMouseMove = (event) => {
            console.log(`Mouse at: ${event.clientX}, ${event.clientY}`);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <h1>Move your mouse around</h1>;
}
```
✅ **Side Effect:** Logs the mouse position.

✅ **Why useEffect?** Prevents memory leaks by removing the event listener when unmounting.

---

### Setting Up and Cleaning Up Timers
#### Code Example:
```javascript
import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <h1>Seconds: {seconds}</h1>;
}
```
✅ **Side Effect:** Increments a timer every second.

✅ **Why useEffect?** Ensures the timer is stopped when the component unmounts.

---

### Subscribing to Real-Time Updates (WebSockets)
#### Code Example:
```javascript
import { useState, useEffect } from "react";

function WebSocketComponent() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = new WebSocket("wss://example.com/socket");

        socket.onopen = () => {
            console.log("WebSocket connected");
        };

        socket.onmessage = (event) => {
            setMessages(prev => [...prev, event.data]);
        };

        socket.onerror = (error) => {
            console.error("WebSocket Error", error);
        };

        socket.onclose = () => {
            console.log("WebSocket Disconnected");
        };

        return () => {
            socket.close(); // Cleanup when component unmounts
        };
    }, []);

    return (
        <div>
            <h2>WebSocket Messages</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
}
```
✅ **Side Effect:** Receives real-time messages via WebSockets.

✅ **Why useEffect?** Ensures WebSocket connections are closed properly.

---

## Conclusion
The `useEffect` hook is essential for handling **side effects** in React functional components. By understanding its behavior and cleanup mechanisms, we can prevent memory leaks and ensure efficient component lifecycle management.

---

## Next Steps: Exercise
- [Exercise: useEffect](/01.%20React%20Hooks/1.%20useEffect/README.md)

