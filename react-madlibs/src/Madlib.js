import React, {useState} from "react"
import MadlibForm from "./MadlibForm"
import {v4 as uuid} from "uuid"
import Item from "./Item"

const Madlib = () =>{
    const initialState = {
        noun1: "",
       noun2: "",
       adjective: "",
       color: ""
    }

    const [items, setItems] = useState(initialState)

    const addItem = (newItem) =>{
        setItems(items => [...items,{...newItem, id:uuid()}])
    }

    return(
        <div>
            <h3>Madlib Form!</h3>
            <div>
                <MadlibForm addItem={addItem}/>
            </div>

            <div>
                {items.map(({id,noun1, noun2, adjective, color}) => <Item id={id} noun1={noun1} noun2={noun2} adjective={adjective} color={color} />)}
            </div>
        </div>
    )
}
