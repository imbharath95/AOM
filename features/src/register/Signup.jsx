import { useState } from "react";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState('');

    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
        "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
        "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    const handleformdata = async (e) => {
        e.preventDefault();
        const url = "http://localhost:3001/signup";
        const options = {
            method: "POST",
            body: JSON.stringify({
                firstName, lastName, password, confirmpassword, address, city, phone, zip, email, companyName, userName
            }),
            headers: {
                "Content-type": "application/json",
                "Accept" : "application/json"
            }
        }
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Accept", "application/json")
    // const raw = JSON.stringify({
    //     "firstName": "sai",
    //     "lasName": "nath",
    //     "password": "1234",
    //     "confirmpassword": "1234",
    //     "address": "wert",
    //     "city": "nj",
    //     "zip": "234",
    //     "phone": "1234",
    //     "userName": "qwer",
    //     "email": "asdf",
    //     "companyName": "werth"
    // });

    // const requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow"
    // };
    // const handleformdata = () => {
    //     console.log("asdfgh")
    //     fetch("http://localhost:3001/signup", requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => console.log(result))
    //         .catch((error) => console.error(error));
    // }
    return <div>
        <form onSubmit={handleformdata}>
            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input>
            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input>
            <input type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)}></input>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmpassword(e.target.value)}></input>
            <input type="text" placeholder="Company Name" onChange={(e) => setCompanyName(e.target.value)}></input>
            <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)}></input>
            <input type="text" placeholder="city" onChange={(e) => setCity(e.target.value)}></input>
            <select onChange={(e) => setState(e.target.value)} value={state}>
                <option value="" disabled>Select a state...</option>
                {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                ))}
            </select>
            <input type="text" placeholder="Zipcode" onChange={(e) => setZip(e.target.value)}></input>
            <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}></input>
            <button type="submit">Create Account</button>
        </form>


    </div>
}

export default Signup;