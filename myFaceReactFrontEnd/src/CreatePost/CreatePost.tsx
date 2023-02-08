import React, { useEffect, FormEvent } from "react";
import { useState } from "react";
import '../App.scss'
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
            }

        );
    }

    return (
        <div>
            <form method="post" action="/posts/create" onSubmit={(e) => HandleSubmit(e)}>
                <label>
                    Blog Message:
                    <input type="text" name="message" required
                        onChange={e => setPostMessage(e.target.value)} />
                </label>
                <label>
                    Blog image URL:
                    <input type="text" required name="imageUrl"
                        onChange={e => setPostImageUrl(e.target.value)}></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}