import { useState } from "react";
import './Main.css'
import axios from 'axios'

function Registeration() {
    
    return (<div>
        
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
            .post(`http://localhost:3005/register`, inputs)
            .then(response => {
                
                console.log(response);
                localStorage.setItem('mytoken',response.data.accessToken)
                localStorage.setItem('role',response.data.role)
                window.location='/'
            })
            .catch(error => {
                localStorage.clear();
                
                if (error.response) {
                    alert(error.response.data); 
                }
            })


    }
    return (<div style ={{marginTop:"90px"}} id="main">
        <h1>Please Register</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input style={{ marginLeft: 30 }} type="email" name="email" value={inputs.email || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Name:</label>
                <input  style={{ marginLeft: 28 }} type="text" name="name" value={inputs.name || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input  type="password" name="password" value={inputs.password || ""} onChange={handleChange} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
            </div>
            <div>
                <label>Role:</label>
                <input style={{ marginLeft: 38 }}  type="text" name="role" value={inputs.role || ""} onChange={handleChange} required />
            </div>
            <button type="submit" >Register</button>
        </form>
    </div>);
}

export default Registeration;