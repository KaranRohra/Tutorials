import React from 'react'

function HookTimer() {
    const [timer, setTimer] = React.useState(0);
    const intervalRef = React.useRef();

    React.useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setTimer(prevTime => prevTime + 1)
        }, 1000)

        return () => clearInterval(intervalRef.current)
    }, [])

    return (
        <div>
            <h2>useRef Timer</h2>
           <h3>{timer}</h3>
           <button onClick={() => clearInterval(intervalRef.current)}>Clear timer</button>
        </div>
    )
}

export default HookTimer
