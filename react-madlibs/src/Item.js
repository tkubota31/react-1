import React, {useState} from "react";

const Item = ({noun1,noun2,adjective,color}) =>{

    return(
        <div>
            <h2> The magnificent {noun1}</h2>
            <h3>{noun1} had crazy {color} hair and eyes.</h3>
            <h3>Everyone called {noun1} crazy and {adjective}</h3>
            <h3>But one day {noun2} appeared with {color} nails and fingers</h3>
            <h3>Together {noun1} and {noun2} made a perfect pair</h3>
        </div>
    )
}

export default Item;
