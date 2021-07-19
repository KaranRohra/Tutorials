import React from 'react'

function Counter() {
    const [counter1, setCounter1] = React.useState(0)
    const [counter2, setCounter2] = React.useState(0)

    const increment1 = () => setCounter1(counter1 + 1);
    const increment2 = () => setCounter2(counter2 + 1);

    const isEven = React.useMemo(() => {
        for(let i=0;i<2000000000;i++);

        return counter1 % 2
    }, [counter1])

    return (
        <div>
            <h2>useMemo</h2>
            <button onClick={increment1}>Increment {counter1}</button> 
            <p>{isEven ? "Even" : "Odd"}</p> 
            <button onClick={increment2}>Increment {counter2}</button> <br />
        </div>
    )
}

export default Counter
