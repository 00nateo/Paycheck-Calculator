import './index.scss'
import { useState } from 'react';
import React from 'react'

const Default = () =>{
    const [weekOne, setWeekOne] = useState('');
    const [weekTwo, setWeekTwo] = useState('');

    const getWeekOne = () => {
        setWeekOne(event.target.value);
    }

    const getWeekTwo = () => {
        setWeekTwo(event.target.value);
    }


    const grossPay = () =>{
        const grossPay = ((Number(weekOne) + Number(weekTwo)) * 16.25);
        return grossPay;
    }
    const takeHome = () =>{
        const takeHome = (grossPay() * (1-(0.062+0.0145)))
        return takeHome;
    }
    const taxes = () =>{
        const taxes = (grossPay() - takeHome());
        return taxes;
    }

    return(
        <>
            <div className = "container">
                <div className = "input">
                    <h3>Hours in Week 1: </h3>
                    <input type="number" value = {weekOne} onChange = {getWeekOne} />
                    <h3>Hours in Week 2: </h3>
                    <input type="number" value = {weekTwo} onChange = {getWeekTwo} />

                </div>
                <br />
                <div className = "results">
                    <p>Taxes: ${taxes().toFixed(2)} </p>
                    <p>Gross Pay: ${grossPay().toFixed(2)} </p>
                    <p>Take Home: ${takeHome().toFixed(2)} </p>
                </div>
            </div>
        </>
    )
}

export default Default;