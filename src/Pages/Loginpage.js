import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const users = [
        {
            name: "harish",
            email: "masterharish321@gmail.com",
            password: "hari2005"
        },
        {
            name: "pookie",
            email: "pookie@gmail.com",
            password: "pookie2005"
        }
    ];

    const Email = (e) => {
        setEmail(e.target.value);
    };
    const Password = (e) => {
        setPassword(e.target.value);
    };

    const Role = (event) => {
        setRole(event.target.value);
    };

    const goToPage = () => {
        if (!email || !password) {
            alert("Please fill out both email and password fields.");
            return;
        }
    
        if (role === 'User') {
            navigate('/user');
            return;
        }
    
        if (role === 'Admin') {
            let found = false;
    
            for (let i = 0; i < users.length; i++) {
                if (email === users[i].email && users[i].password === password) {
                    found = true;
                    navigate('/Admin');
                    break;
                }
            }
            if (!found) {
                alert("User not found.");
            }
        } else {
            alert("Please select a valid role.");
        }
    
    };

    return (
        <div className="bg-gradient-to-r from-cyan-800 via-gray-200 to-pink-200 h-screen flex items-center justify-center">
            <div className=" shadow-xl shadow-neutral-950 rounded-lg m-1 p-4 flex flex-col gap-1">
                <h1 className="p-4 flex justify-center font-bold">USER AUTHENTICATION</h1>
                <div className="flex flex-col gap-3">
                <select plcenteraceholder="Select Mode" id="dropdown"
                        className="  h-10 p-2 border-2 bg-transparent border-2 border-black placeholder-black rounded-md mt-2"
                        value={role}
                        onChange={Role}>
                        <option value="" disabled>Select an option</option>
                        <option value="Admin"  >Admin Login</option>
                        <option value="User"  >User Login</option> </select>
                    <input className="h-9 bg-transparent border-2 border-black placeholder-black rounded-lg hover:border-2 cursor-pointer" type="email" value={email} onChange={Email} name="email" id="email" placeholder="Enter Email" required />
                    <input className="h-9 bg-transparent border-2 border-black placeholder-black  rounded-lg hover:border-2 cursor-pointer" type="password" value={password} onChange={Password} name="password" id="password" placeholder="Enter Password" required />
                    <button className="h-7 rounded-lg bg-transparent  border-2 text-black font-semibold border-black" onClick={goToPage}>Login</button>
                </div>
            </div>
        </div>
    )
}



export default Loginpage;