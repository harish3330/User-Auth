import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
    const [Value, setValue] = useState("");
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

    const EmailChange = (e) => {
        setEmail(e.target.value);
    };
    const PasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const RoleChange = (event) => {
        setRole(event.target.value);
    };

    const goToPage = () => {
        if (!email || !password) {
            alert("Please fill out both email and password fields.");
            return;
        }

        let found = false;

        for (let i = 0; i < users.length; i++) {
            if (email === users[i].email && users[i].password === password) {
                found = true;

                if (role === 'Admin') {
                    navigate('/Admin');
                    break;
                } else if (role === 'User') {
                    navigate('/user');
                    break;
                }
            }
        }

        if (!found) {
            alert("user not found.");
        } else if (role !== 'Admin' && role !== 'User') {
            alert("Please select a valid role.");
        }
    };

    return (
        <div className="bg-gradient-to-r from-cyan-800 via-gray-200 to-pink-200 h-screen flex items-center justify-center">
            <div className=" shadow-xl shadow-neutral-950 rounded-lg m-1 p-4 flex flex-col gap-1">
                <h1 className="p-4 flex justify-center font-bold">USER AUTHENTICATION</h1>
                <div className="flex flex-col gap-3">
                    <input className="h-9 bg-transparent border-2 border-black placeholder-black rounded-lg" type="email" value={email} onChange={EmailChange} name="email" id="email" placeholder="Enter Email" required />
                    <input className="h-9 bg-transparent border-2 border-black placeholder-black  rounded-lg" type="password" value={password} onChange={PasswordChange} name="password" id="password" placeholder="Enter Password" required />
                    <select plcenteraceholder="Select Mode" id="dropdown"
                        className="  h-10 p-2 border-2 bg-transparent border-2 border-black placeholder-black rounded-md mt-2"
                        value={role}
                        onChange={RoleChange}>
                        <option value="" disabled>Select an option</option>
                        <option value="Admin"  >Admin Login</option>
                        <option value="User"  >User Login</option> </select>
                    <button className="h-7 rounded-lg bg-transparent  border-2 text-black font-semibold border-black" onClick={goToPage}>Login</button>
                </div>
            </div>
        </div>
    )
}



export default Loginpage;