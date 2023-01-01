import React from "react";

function Arrow(){
    return(
        <>
        <div style={{margin: "10px", padding: "15px", border: "1px solid gray" }}>
            <div >
            <h4>Arrow Functions</h4>
            <li>In arrow function “this” equals to this of the outer function.</li>
            <li>In arrow function arguments is not defined</li>
            <li>in Arrow function you can skip return keyword and write in single line</li>
            <li>In arrow function parameters should be unique.</li>
            <li>Hoisting matters in arrow function as function get not be invoked before initializations.</li>
            </div>

            <div >
            <h4>Regular Function</h4>
            <li>In regular function, “this” value is dynamic</li>
            <li>In regular function, arguments will give you list of parameters passed in function</li>
            <li>In regular function, you always must return any value</li>
            </div>
        </div>
        </>
    )
}

export default Arrow;