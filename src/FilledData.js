import React from 'react'

export default function FilledData(props) {
   
    return (
        <div>
            <h1>Name: {props.myData.fnm}</h1>
            <h1>{props.myData.lnm}</h1>
            <h1>{props.myData.email}</h1>
           
        </div>
    )
}
