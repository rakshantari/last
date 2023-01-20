import React, { useState } from "react";
import "./App.css";

const App =()=>{

    const [result,setresult] =useState("");

    const clickhandler=(event)=>{
        setresult(result.concat(event.target.value))
    }

    const clear =()=>{
        setresult("");
    }
    const calculate=()=>{
        setresult(eval(result));
    }
    const backspace=()=>{
        setresult(result.slice(0,-1));
    }
    return(
        <div className="calc">
            
            <input type="text" placeholder="0" className="answer" value={result}/>
            <input type="button" value="clear" className="button button1 blue" onClick={clear}/>
            <input type="button" value="c" className="button blue" onClick={backspace}/>
            <input type="button" value="*" className="button blue" onClick={clickhandler}/>
            <input type="button" value="9" className="button" onClick={clickhandler}/>
            <input type="button" value="8" className="button" onClick={clickhandler}/>
            <input type="button" value="7" className="button" onClick={clickhandler}/>
            <input type="button" value="/" className="button blue" onClick={clickhandler}/>
            <input type="button" value="4" className="button" onClick={clickhandler}/>
            <input type="button" value="5" className="button" onClick={clickhandler}/>
            <input type="button" value="6" className="button" onClick={clickhandler}/>
            <input type="button" value="-" className="button blue" onClick={clickhandler}/>
            <input type="button" value="1" className="button" onClick={clickhandler}/>
            <input type="button" value="2" className="button" onClick={clickhandler}/>
            <input type="button" value="3" className="button" onClick={clickhandler}/>
            <input type="button" value="+" className="button blue" onClick={clickhandler}/>
            <input type="button" value="." className="button" onClick={clickhandler}/>
            <input type="button" value="0" className="button" onClick={clickhandler}/>
            <input type="button" value="=" className="button button1 blue" onClick={calculate}/>
        </div>
    )
}

export default App;