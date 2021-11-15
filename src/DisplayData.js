import React, { Component } from 'react'

export default class DisplayData extends Component {
    name = ['sanjana',"munira","pritesh"]
    render() {
        return (
            <div>
                {
            this.name.map(v =>{
                return (<h3 key={v}>{v}</h3>)
            }) 
            } 
            <select>
                <option>Select name</option>{
                    this.name.map(v =>{
                        return(<h3 key={v}>{v}</h3>)
                    })
                    
                }
            </select>

            </div>
        )
    }
}
