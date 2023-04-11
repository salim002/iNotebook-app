import noteContext from "./NoteContext";
import {useState} from "react";

const NoteState = (props)=>{
    const s1 = {
        "name": "Salim",
        "class": "5b"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name":"Sahil",
                "class": "5b"
            })
        }, 1000);
    }
    return(
        <noteContext.Provider value={{state, update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;