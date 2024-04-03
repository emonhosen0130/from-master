import { useState } from "react";

const StatefullForm = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
    }
    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameChange}
                    type="text" name="name" id="" />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" id="" />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name="password" id="" />
                <br />
                <input type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefullForm;