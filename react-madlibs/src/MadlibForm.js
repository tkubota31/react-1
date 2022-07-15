import React ,{useState} from "react";

const MadlibForm = () =>{
    const initialState = {
       noun1: "",
       noun2: "",
       adjective: "",
       color: ""
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) =>{
        const{name,value} = e.target;
        setFormData( data => ({
            ...data,
            [name]:value
        }))
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const{noun1,noun2,adjective,color} = formData;
        alert(`Thank you for submitting you ${adjective} ${noun1}. ${noun2} has the same favorite color as you,${color}! `)
        setFormData(initialState);

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="noun1"> Noun 1</label>
                    <input
                    id="noun1"
                    type="text"
                    placeholder="noun1"
                    name="noun1"
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

            </form>
        </div>
    )
}

export default MadlibForm
