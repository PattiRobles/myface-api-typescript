import React from "react";

//Promise is what we return from the function. The type is a Promise
export function createPost(message: string, imageUrl: string): Promise<Response> {

    const url = `http://localhost:3001/posts/create`;

    const requestBody = {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            message: message,
            imageUrl: imageUrl
        })
    }

    const fetchResponse = fetch(url, requestBody)

        // .then(response => response.json())
        .then(response => {
            if (response.status !== 200) {
                // console.log(responseJSON.error)
                throw new Error (`Something went wrong, ${response.errors[0].param} is an invalid value`)
            }
            
            alert('New post successfully created')
            return response;
            
        })
        return fetchResponse; 
}



export function createUser( userNameAndSurname: string, userName: string, userEmail: string, userCoverImage: string, userProfileImage: string): Promise<Response> {
    
    const url = `http://localhost:3001/users/create/`;

    const requestBody = {
        method: "POST", 
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            name: userNameAndSurname, 
            username: userName, 
            email: userEmail, 
            coverImageUrl: userCoverImage, 
            profileImageUrl: userProfileImage
        })
    } //the requestBody keys needs to have exactly the same key name as the Route. post request requires

    const fetchResponse = fetch(url, requestBody)

//transforming response to JSON is problematic. Line 56: if left in, correct submissions do not go through 
//error : "unexpected token 'O', 'OK'  is not valid JSON". However, if there is an error with an input field things actually work and
//the correct errors are shown. If I remove line 56, then correct submissions work but input errors are undefined
        .then(response => response.json()) //this seems to block correct submissions
        .then((response) => {
            console.log(response)
            if(response.status === 200) {
             alert('New user successfully created')
              return response
            } else {
                throw new Error(`Something went wrong... ${response.errors.map((error:any) => error.param)} field is invalid`)
            }   
                // throw new Error (`Incorrect data entered in form`)
                //throw new Error (`Something went wrong, ${response.errors[0].param} is an invalid value.`) - this is reading undefined
                
            })
            
            // return response;

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