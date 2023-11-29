import React, { useState}from "react";


function ListPerson(){
    const [username, setUsername] = useState("");

    const subMitHandler = event => {
        event.preventDefault();
        alert("You are submitting " + username);
    };
    const handleChange = event => setUsername(event.target.value)

    return (
        <form onSubmit={subMitHandler}>
            <h1> Hello {username}</h1>
            <p> Enter your name, and submit: </p>
            <input type="text" onChange={handleChange}/>
            <input type= "submit"/>
        </form>
    )



}
export default ListPerson;