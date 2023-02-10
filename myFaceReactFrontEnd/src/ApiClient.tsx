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
        method: "POST", 
        headers: {"Content-Type": "application/json"},
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

export function createUser( userNameAndSurname: string, userName: string, userEmail: string, userCoverImage: string, userProfileImage: string): Promise<Response> {
    const url = `http://localhost:3001/users/create`;

    const requestBody = {
        name: userNameAndSurname, 
        username: userName, 
        email: userEmail, 
        coverImageUrl: userCoverImage, 
        profileImageUrl: userProfileImage
    }
   //the requestBody keys needs to have exactly the same key name as the Route. post request requires

    const fetchResponse = fetch(url, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(requestBody)
    })

        .then(response => {
            console.log(response)
            if (response.status === 200) {
                return response;
            } else {
                throw new Error('Something went wrong...')
            }
        }
        )
        return fetchResponse; 
}

export function likePost(postId: number, likeDislike: string) {
    console.log(postId);
    const url = `http://localhost:3001/posts/${postId}/${likeDislike}/`;
    const fetchResponse = fetch(url, {
        method: "POST"
    })
        .then(response => {
            console.log(response);
            if (response.status === 200) {
                return response;
            } else {
                throw new Error('Something went wrong...')
            }
        }
        )
    return fetchResponse;

}