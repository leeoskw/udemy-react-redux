import React from "react"


/**
 * Fragmentos React são utilizados quando não queremos envolver os elementos em uma tag externa
 * como o <div> por exemplo.
 * 
 */


export default function Fragmento(props){
    return (
        <React.Fragment>
            <h2>Esses elementos</h2>
            <p>nao serão envoltos numa tag</p>
        </React.Fragment>
    )
}