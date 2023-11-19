import {useState} from "react";

function Counter(){
    let [ count, setCount] = useState(0)
    let [ countA, setCountA] = useState(0)
    const handleClick = () =>{
        const newValue = count + 1;
        setCount(newValue)
    };
    const handleClickDouble = () =>{
        const newValue = countA+2;
        setCountA(newValue)
    };
    return (
        <div>
            Count {count}
            <div>
                <button onClick = {handleClick}>Add1</button>
            </div>

            Count {countA}
            <div>
                <button onClick = {handleClickDouble}>Add2</button>
            </div>
        </div>

    );
}
export default Counter;