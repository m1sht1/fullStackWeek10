import React, {useState} from 'react'
import FilledData from './FilledData';

export default function StudentFunction() {
    const [data, setData]=useState({})
    const [storeData, setStoreData]=useState({})
    const readData= (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    
    
    onsubmit=(e)=>{
        e.preventDefault();
        setStoreData(data)
    }

    return (
        <div>
            <form>
            <h3>Email:</h3><input name="email" onChange ={readData} placeholder="Enter email" type="text" />
                    <h3>Full Name:</h3><input name="fnm" onChange ={readData} placeholder="Enter First Name" type="text" />
                    <input name="lnm" onChange ={readData} placeholder="Enter Last Name" type="text" />
                    <h3>Address:</h3><input name="address" onChange ={readData} placeholder="1234 Main Street" type="text" />
                    <h3>Address 2:</h3><input name="address2" onChange ={readData} placeholder="Apartment,studio,or floor" type="text" />
                    <h3>City:</h3><input name="city" onChange ={readData} placeholder="City" type="text" />
                    <h3>Province:</h3><input name="Province" onChange ={readData} placeholder="Province" type="text" />
                    <h3>Postal Code2:</h3><input name="Postal Code" onChange ={readData} placeholder="Postal Code" type="text" />
                    <input type="submit" value="Submit"/>
                </form>
            <input type="submit" value="Submit"/>
            <FilledData myData= {storeData}/>
        </div>
        
    )
}
