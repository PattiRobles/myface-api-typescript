import React, { useEffect, FormEvent } from "react";
import { useState } from "react";
import '../App.scss'
import '../CreateUser/CreateUser.scss'
import { createPost } from '../ApiClient';

export function CreatePost() {
    const [postMessage, setPostMessage] = useState("");
    const [postImageUrl, setPostImageUrl] = useState("");

    async function HandleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createPost(postMessage, postImageUrl).then(
            (response) => {
                alert("New post successfully created!");
                console.log(response)
            })
            .catch((error) => {
                console.error(error.message)
            })

        };
    
    return (
        <div>
            <form method="post" action="/posts/create" onSubmit={(e) => HandleSubmit(e)}>
                <label>
                    Blog Message: <br></br>
                    <input 
                    type="text" 
                    name="message" 
                    required
                    onChange={e => setPostMessage(e.target.value)} 
                    placeholder="Required"/>
                </label>
                <label>
                    Blog image URL:<br></br>
                    <input 
                    type="text" 
                    required 
                    name="imageUrl"
                    onChange={e => setPostImageUrl(e.target.value)}
                    placeholder="Required"></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}