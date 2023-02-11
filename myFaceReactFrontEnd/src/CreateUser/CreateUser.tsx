import React, { useEffect, FormEvent } from "react";
import { useState } from "react";
import '../App.scss'
import './CreateUser.scss'
import { createUser } from "../ApiClient";

export function CreateUser() {
    const [userNameAndSurname, setUserNameAndSurname] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userCoverImage, setUserCoverImage] = useState("");
    const [userProfileImage, setUserProfileImage] = useState("");

    async function HandleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        createUser(userNameAndSurname, userName, userEmail, userCoverImage, userProfileImage)
            .then(
            (response) => {
                alert("New user successfully created!");
                console.log(response)
            }
        );
    }

    return (
        <div>
            <form onSubmit={(e) => HandleSubmit(e)}>
                <label>
                    Name: <br></br>
                    <input 
                    type="text" 
                    name="name" 
                    required
                    onChange={e => setUserNameAndSurname(e.target.value)}
                    placeholder="Required" ></input>
                </label>
                <label>
                    Username:<br></br>
                    <input 
                    type="text" 
                    name="username" 
                    required
                    onChange={e => setUserName(e.target.value)}
                    placeholder="Required " ></input>
                </label>
                <label>
                    Email: <br></br>
                    <input 
                    type="text" 
                    name="email" 
                    required
                    onChange={e => setUserEmail(e.target.value)}
                    placeholder="Required"></input>
                </label>
                <label>
                    Cover Image URL: <br></br>
                    <input 
                    type="text"  
                    name="coverImageUrl" 
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
                    required
                    onChange={e => setUserProfileImage(e.target.value)} 
                    placeholder="Required"></input>
                </label>
                
                <button type="submit">Create New User</button>
            </form>
        </div>
    )
}

// router.post('/create/',
//     body('name').notEmpty(),
//     body('username').notEmpty().isLowercase().not().contains(" "),
//     body('email').notEmpty().isEmail(),
//     body('coverImageUrl').notEmpty(),
//     body('profileImageUrl').notEmpty(),
//     async (request, response) => {

//     const errors = validationResult(request);
//     if (!errors.isEmpty()) {
//         return response.status(400).json({errors: errors.array()});
//     }
//     const user = request.body;

//     await createUser(user as CreateUserRequest);
//     return response.sendStatus(200)
// });

// export interface CreateUserRequest {
//     name: string;
//     username: string;
//     email: string;
//     coverImageUrl: string;
//     profileImageUrl: string;
// }