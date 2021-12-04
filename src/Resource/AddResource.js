import { useState } from "react";
import '../Main.css'
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
        .post('http://localhost:4500/crm/resource',inputs)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            window.location='/ResourceList';
        })
    }
    return (<div style ={{marginTop:"90px"}}id ="main">
        <h1>Add Resource</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Resource Name :</label>
                <input type="text" name="resource_name" value={inputs.resource_name || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Batch id :</label>
                <input  style={{marginLeft:58}} type="text" name="batch_id"  value={inputs.batch_id || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Resource Rent :</label>
                <input  style={{marginLeft:9}} type="number" name="resource_rent"  value={inputs.resource_rent || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Duration :</label>
                <input  style={{marginLeft:55}} type="text" name="duration"  value={inputs.duration || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Availability :</label>
                <input  style={{marginLeft:41}} type="text" name="availability"  value={inputs.availability || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Picture :</label>
                <input style={{marginLeft:65}} type="text" name="picture"  value={inputs.picture  || ""} onChange={handleChange}  required />
            </div>
            <div>
                <label>Description :</label>
                <textarea style={{marginLeft:35}} name="description"  value={inputs.description  || ""} onChange={handleChange}  required />
            </div>
            
            
            
            <button type="submit" >Add</button>
        </form>
    </div>);
}

export default AddResource;