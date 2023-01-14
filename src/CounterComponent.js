import React from "react"

function CounterComponenet(props) {
    const style = {
        h1style: {color: "white"},
        // buttonStyle : {padding:"5px", marginRightt:"10px"},
        errorStyle: {color: "Red"},
        pStyle: {color: "white", borderBottom: "1px solid #FFFFFF", fontSize:"20px"},
        zeroButton:{background:"black", color:"white",padding:"10px 15px 10px 15px", marginRight:"10px",fontSize:"15px", marginLeft:"10px", border:"1px solid white"}
        
    }

    return (
        <>
            <h1 style={style.h1style}>Counter using React</h1>
            <span style={style.pStyle}>Your Current Count is: <strong>{props.counter}</strong></span> <br />
            <div className="buttons">
            <button style = {{padding:"10px 15px 10px 15px", marginRight:"10px",fontSize:"15px"}} onClick={props.decrement}>Decrement</button>

            <button style = {{padding:"10px 15px 10px 15px", marginRight:"10px",fontSize:"15px", marginRightt:"10px",fontSize:"15px"}} onClick={props.increment}>Increment</button>
            {props.counter > 10 ? <button onClick={props.zero} style = {style.zeroButton}>GO BACK TO 0</button> : ""}
            </div>
            {props.counter === 0 ? <p style={style.errorStyle}>Error: Cannot go below 0</p> : ""}

        </>)
}

export default CounterComponenet