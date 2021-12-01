import { useState } from "react";
import './Main.css'
import axios from 'axios'
//import {useNavigate} from 'react-router-dom'
//import React from "react";
//import {useHistory} from 'react-router-dom'
function Login() {
    
    
    localStorage.clear();
    return (<div>
        <h1>Please Login</h1>
        <MyForm />


    </div>);
}
function MyForm(props) {
    //const Navigate = useNavigate();
    //const History=useHistory();
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
                
                console.log(response.data.accessToken);
                localStorage.setItem('mytoken',response.data.accessToken)
                //Navigate('/resourcelist',{ replace: true })
                window.location='/resourcelist';
                //History.push('/resourcelist')
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
                <input style={{ marginLeft: 83 }} type="email" name="email" value={inputs.email || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input style={{ marginLeft: 60 }} type="password" name="password" value={inputs.password || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Role:</label>
                <input style={{ marginLeft: 90 }} type="text" name="role" value={inputs.role || ""} onChange={handleChange} required />
            </div>
            <button type="submit" >Login</button>
        </form>
    </div>);
}

export default Login;