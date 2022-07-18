import React, {useState} from "react"
import MadlibForm from "./MadlibForm"
import {v4 as uuid} from "uuid"
import Item from "./Item"
import useToggleState from "./hooks/useToggleState"

const Madlib = () =>{
    const initialState = [{
    //     noun1: "",
    //    noun2: "",
    //    adjective: "",
    //    color: ""
}]

    const [items, setItems] = useState(initialState)
    const [showStory,toggleShowStory] = useToggleState()

    const addItem = (newItem) =>{
        setItems(items => [...items, {...newItem, id:uuid()}])
    }
    const restart = () =>{
        toggleShowStory(false);
        setItems([])
    };

    return(
        <div>
            <h3>Let's make Madlibs!</h3>
            {showStory ? (
                <div>
                {items.map(({id, noun1, noun2, adjective, color}) => <Item id={id} noun1={noun1} noun2={noun2} adjective={adjective} color={color} key={id} />)}
                </div>
            ) : (
            <div>
                <MadlibForm addItem={addItem} toggleShowStory={toggleShowStory}/>
            </div>
            )}
            <div>
                <button onClick={restart}>Restart</button>
            </div>
        </div>
    )
}

export default Madlib
