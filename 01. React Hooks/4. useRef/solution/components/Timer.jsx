import { useState, useEffect, useRef } from 'react';

const Timer = () => {

        const [timer, setTimer] = useState(20);

        const intervalRef = useRef(null);

        useEffect(() => {

                intervalRef.current = setInterval(() => {
                        setTimer((prev) => prev - 1)
                }, 1000);

                return () =>  clearInterval(intervalRef.current);
        }, [])
        return (
                <div>
                        <h1>useRef to Persist Values between Renders</h1>

                        <h2>Timer: {timer} </h2>
                        <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
                </div>
        );
}

export default Timer;
