import React,{useState} from "react";

const MadlibForm = ({addItem, toggleShowStory}) =>{
    const initialState = {
       noun1: "",
       noun2: "",
       adjective: "",
       color: ""
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) =>{
        const{name,value} = e.target;
        setFormData( (data) => ({
            ...data,
            [name]:value
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        addItem({...formData});
        // alert(`Thank you for submitting you ${adjective} ${noun1}. ${noun2} has the same favorite color as you,${color}! `)
        setFormData(initialState);
        toggleShowStory(true)

    };

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="noun1"> Noun 1</label>
                    <input
                    id="noun1"
                    type="text"
                    name="noun1"
                    placeholder="noun1"
                    value={formData.noun1}
                    onChange={handleChange}
                    >
                    </input>
                </div>

                <div>
                    <label htmlFor="noun2"> Noun 2</label>
                    <input
                    id="noun2"
                    type="text"
                    placeholder="noun2"
                    name="noun2"
                    value={formData.noun2}
                    onChange={handleChange}
                    >
                    </input>
                </div>

                <div>
                    <label htmlFor="adjective"> Adjective </label>
                    <input
                    id="adjective"
                    type="text"
                    placeholder="adjective"
                    name="adjective"
                    value={formData.adjective}
                    onChange={handleChange}
                    >
                    </input>
                </div>

                <div>
                    <label htmlFor="color"> Color </label>
                    <input
                    id="color"
                    type="text"
                    placeholder="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    >
                    </input>
                </div>
                <button>Create Story</button>

            </form>
        </div>
    )
}

export default MadlibForm
