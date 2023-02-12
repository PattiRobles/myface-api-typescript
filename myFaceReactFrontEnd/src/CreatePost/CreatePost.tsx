import React, { useEffect, FormEvent } from "react";
import { useState } from "react";
import '../App.scss'
import '../CreateUser/CreateUser.scss'
import { createPost } from '../ApiClient';
import { useNavigate } from "react-router-dom";

export function CreatePost() {

    const [postMessage, setPostMessage] = useState<string>("");
    const [postImageUrl, setPostImageUrl] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("")

    const navigate = useNavigate()

    async function HandleSubmitNewPost(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        createPost(postMessage, postImageUrl)
        
        .then(() => navigate('/posts'))
        .catch(error => setErrorMessage(error.message))
               
    }

    
    return (
        <div>
            <p className="errormessage">{(errorMessage) ? errorMessage : ""}</p>
            <form onSubmit={(e) => HandleSubmitNewPost(e)}>
                <label>
                    Post Message: <br></br>
                    <input 
                    type="text" 
                    name="message" 
                    value={postMessage}
                    // required
                    onChange={e => setPostMessage(e.target.value)} //handles user input in real time
                    placeholder="Required"/>
                </label>
                <label>
                    Post image URL:<br></br>
                    <input 
                    type="text" 
                    // required 
                    name="imageUrl"
                    value={postImageUrl}
                    onChange={e => setPostImageUrl(e.target.value)}
                    placeholder="Required"></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}