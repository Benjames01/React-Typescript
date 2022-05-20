import React, { useState } from 'react';
import { IState as Props} from "../App"

interface IProps {
    people:     Props["people"],
    setPeople:  React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => 
{

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        url: "",
    })




    const handleChange = function(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = function(e: React.MouseEvent<HTMLButtonElement>) : void
    {
        // Check if the required inputs are present
        if(
            !input.name ||
            !input.age  ||
            !input.url  
        ) {
            return // Return if any are missing
        }

        setPeople(
            [
                ...people,
                {
                    name: input.name,
                    age: parseInt(input.age),
                    url: input.url,
                    note: input.note,
                }
            ]
        )

        setInput({
            name: "",
            age: "",
            note: "",
            url: "",
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                name="name"
                onChange={handleChange}
                
            />
            <input
                type="number"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                name="age"
                onChange={handleChange}
                
            />
            <input
                type="text"
                placeholder="Image URL"
                className="AddToList-input"
                value={input.url}
                name="url"
                onChange={handleChange}
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                value={input.note}
                name="note"
                onChange={handleChange}
            />

            <button
                className="AddToList-btn"
                onClick={handleClick}
            >
                Add Invite
            </button>
        </div>
    )
}

export default AddToList;