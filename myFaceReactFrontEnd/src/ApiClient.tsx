import React from "react";

//Promise is what we return from the function. The type is a Promise
// which is returned because we are doing a fetch(), which is an asyncrhonous function
//Response refers to the response from the fetch
export function createPost(message: string, imageUrl: string): Promise<Response> {
    const url = `http://localhost:3001/posts/create`;

    const requestBody = {
        message: message,
        imageUrl: imageUrl
    }

    const fetchResponse = fetch(url, {
        //method is set to "GET" by default when using fetch()
        method: "POST", headers: {
            "Content-Type": "application/json"
        },
        //when we pass a JS object to a server, it needs to be 'stringified' 
        body: JSON.stringify(requestBody)
    })

        .then(response => {
            if (response.status === 200) {
                return response;
            } else {
                throw new Error('Something went wrong...')
            }
        }
        )
        return fetchResponse; 
}

export function createUser(message: string, imageUrl: string): Promise<Response> {
    const url = `http://localhost:3001/posts/create`;

    const requestBody = {
        message: message,
        imageUrl: imageUrl
    }

    const fetchResponse = fetch(url, {
        //method is set to "GET" by default when using fetch()
        method: "POST", headers: {
            "Content-Type": "application/json"
        },
        //when we pass a JS object to a server, it needs to be 'stringified' 
        body: JSON.stringify(requestBody)
    })

        .then(response => {
            if (response.status === 200) {
                return response;
            } else {
                throw new Error('Something went wrong...')
            }
        }
        )
        return fetchResponse; 
}

