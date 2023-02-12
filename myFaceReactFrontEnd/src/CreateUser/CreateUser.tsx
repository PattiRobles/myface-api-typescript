import React, { useEffect, FormEvent } from "react";
import { useState } from "react";
import '../App.scss'
import './CreateUser.scss'
import { createUser } from "../ApiClient";
import { useNavigate } from "react-router-dom";

export function CreateUser() { //rename to 'CreateNewUser' to avoid confusion with APIClient fetch call??

    const [userNameAndSurname, setUserNameAndSurname] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userCoverImage, setUserCoverImage] = useState("");
    const [userProfileImage, setUserProfileImage] = useState("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const navigate = useNavigate();

    async function HandleSubmitNewUser(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        createUser(userNameAndSurname, userName, userEmail, userCoverImage, userProfileImage)
            .then(() => navigate('/users'))
            .catch(error => setErrorMessage(error.message))

    }


    return (
        <div>
            <p className="errormessage">{(errorMessage)? errorMessage : ""} </p>
            <form onSubmit={(event) => HandleSubmitNewUser(event)}>
                <label>
                    Name: <br></br>
                    <input 
                    type="text" 
                    name="name" 
                    value={userNameAndSurname}
                    // required
                    onChange={e => setUserNameAndSurname(e.target.value)}
                    placeholder="Required" ></input>
                </label>
                <label>
                    Username:<br></br>
                    <input 
                    type="text" 
                    name="username" 
                    value={userName}
                    required
                    onChange={e => setUserName(e.target.value)}
                    placeholder="Required " ></input>
                </label>
                <label>
                    Email: <br></br>
                    <input 
                    type="text" 
                    name="email" 
                    value={userEmail}
                    required
                    onChange={e => setUserEmail(e.target.value)}
                    placeholder="Required"></input>
                </label>
                <label>
                    Cover Image URL: <br></br>
                    <input 
                    type="text"  
                    name="coverImageUrl" 
                    value={userCoverImage}
                    required
                    onChange={e => setUserCoverImage(e.target.value)}
                    placeholder="Required">
                    </input>
                </label>
                <label>
                    Profile Image URL: <br></br>
                    <input 
                    type="text" 
                    name="profileImageUrl" 
                    value={userProfileImage}
                    required
                    onChange={e => setUserProfileImage(e.target.value)} 
                    placeholder="Required"></input>
                </label>
                
                <button type="submit">Create New User</button>
            </form>
        </div>
    )
}

