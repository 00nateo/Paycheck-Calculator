import './index.scss';
import { useState } from 'react';

const Desired = () =>{
    const [desiredPay, setDesiredPay] = useState('');

    const handleChange = () =>{
        setDesiredPay(event.target.value);
    }

    const calculate = () =>{
        const a = (1 - (0.062+0.0145)) * 16.25;
        let hoursNeeded = desiredPay / a;
        return hoursNeeded;
    }
    return(
        <>
            <body className = "container">
                <h3>
                    Enter Desired Paycheck: $
                </h3>
                <input type = "number" value = {desiredPay} onChange = {handleChange}/>
                <div className = "results">
                    <p>Hours Needed: {calculate().toFixed(2)}</p>
                </div>
            </body>
        </>
    )
}

export default Desired;