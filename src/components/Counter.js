import React from 'react'
import { useState } from 'react'
export default function Counter() {
    const [count, setCount] = useState(0);
    const [showPara, setShowPara] = useState(false);
    const Change = () => {
        setShowPara(!showPara);
        setCount(count + 1);
    }
    return (
        <div>
            <button className='btn btn-primary' onClick={Change}>Display Details</button>
            {showPara ? (<p><b>Have a look on React Assignment1</b></p>) : ("")}
            <p>Button is clicked {count} times</p>
        </div>
    )
}

