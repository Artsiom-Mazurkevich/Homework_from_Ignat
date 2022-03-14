import React from 'react'
import {AffairType} from "./HW2";
import affairs from "./Affairs";

type AffairPropsType = {
    // key не нужно типизировать
    affair: string // need to fix any
    deleteAffairCallback: () => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback() // need to fix

    return (
        <div>
                <span>{props.affair}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
