import { useState } from "react";
import './Main.css'
import axios from 'axios'
function AddResource() {
    return (<div>

        <MyForm />

    </div>);
}
function MyForm() {
    const[inputs,setInputs] = useState({})


    function handleChange(event){
        const name = event.target.name ;
        const value = event.target.value;

        setInputs(values =>({...values, [name]:value}))

    }

    function handleSubmit(event){
        event.preventDefault();

        console.log(inputs);

        axios
        .post('http://localhost:3001/resource',inputs)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            window.location='/ResourceList';
        })
    }
    return (<div id ="main">
        <h1>Add Resource</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Resource Name :</label>
                <input type="text" name="resource_name" value={inputs.resource_name || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Batch id :</label>
                <input  style={{marginLeft:46}} type="text" name="batch_id"  value={inputs.batch_id || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Resource Rent :</label>
                <input  style={{marginLeft:6}} type="number" name="resource_rent"  value={inputs.resource_rent || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Duration :</label>
                <input  style={{marginLeft:41}} type="text" name="duration"  value={inputs.duration || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Availability :</label>
                <input  style={{marginLeft:21}} type="text" name="availability"  value={inputs.availability || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Picture :</label>
                <input style={{marginLeft:51}} type="text" name="picture"  value={inputs.picture  || ""} onChange={handleChange}  required />
            </div>
            <div>
                <label>Description :</label>
                <textarea style={{marginLeft:23}} name="description"  value={inputs.description  || ""} onChange={handleChange}  required />
            </div>
            
            
            
            <button type="submit" >Add</button>
        </form>
    </div>);
}

export default AddResource;