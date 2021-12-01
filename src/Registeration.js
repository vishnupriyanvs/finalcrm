import { useState } from "react";
import './Main.css'
import axios from 'axios'

function Registeration() {
    
    return (<div>
        <h1>Please Register</h1>
        <MyForm />


    </div>);
}
function MyForm(props) {
    
    const [inputs, setInputs] = useState({});
    function handleChange(event) {
        
        const name = event.target.name;
        const value = event.target.value;
       
        setInputs(values => ({ ...values, [name]: value }))
    }


    function handleSubmit(event) {
        
        event.preventDefault();

        console.log(inputs);

        axios
            .post(`http://localhost:3005/login`, inputs)
            .then(response => {
                
                console.log(response);
                localStorage.setItem('mytoken',response.data.accessToken)
                //window.location('')
            })
            .catch(error => {
                localStorage.clear();
                
                if (error.response) {
                    alert(error.response.data); 
                }
            })


    }
    return (<div id="main">

        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input style={{ marginLeft: 22 }} type="email" name="email" value={inputs.email || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Name:</label>
                <input  style={{ marginLeft: 22 }} type="text" name="name" value={inputs.name || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input  type="password" name="password" value={inputs.password || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Role:</label>
                <input style={{ marginLeft: 30 }}  type="text" name="role" value={inputs.role || ""} onChange={handleChange} required />
            </div>
            <button type="submit" >Login</button>
        </form>
    </div>);
}

export default Registeration;