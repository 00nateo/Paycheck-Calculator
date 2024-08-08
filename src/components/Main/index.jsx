import './index.scss';
import React from 'react';
import Default from '../Default';
import {useState} from 'react';
import Desired from '../Desired';

const Main = () => {
    /**
     * onClick for button{
     * switch mode from desired to default based on current state?
     * }
     */
    const [mode, setMode] = useState(true);

    

    return (
        <>
            <body className = "container">
            
                <div>
                    <button className="changeMode" type="button" onClick={() => setMode(!mode)}>
                        Change Mode
                    </button>
                </div>
                <br />
                <div className = "title">
                    <h1>Paycheck Calculator</h1>
                </div>
                <br />
                <div className="method">
                    {mode ? <Default/> : <Desired/>}
                </div>
                
            
            </body>
        </>
    );
}
export default Main;