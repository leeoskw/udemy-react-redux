import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default (props) => {
    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome="Silva" />
            <FamiliaMembro nome="Ana" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Gustavo" {...props} /> 
        </div>
    )
}