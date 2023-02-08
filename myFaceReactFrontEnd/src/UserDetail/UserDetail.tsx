import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../App.scss'

interface UserPostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: string;
}

export interface UserModel {
    id: number;
    name: string;
    username: string;
    profileImageUrl: string;
    coverImageUrl: string;
    email: string;
    posts: UserPostModel[];
    likes: UserPostModel[];
    dislikes: UserPostModel[];
}

export function UserDetail() {
    const [userData, setUserData] = useState<UserModel>();

    // const location = useLocation();
    // const userTagAndUserId = location.pathname
    //the pathname does not give you access to the parameters
    

    let { userId } = useParams(); 

	//can destructure the object returned by params and call it a name that makes sense

	useEffect(() => {
		fetch(`http://localhost:3001/users/${userId}`)
		.then(response => response.json)
		.then(userData => setUserData(userData))
	}, []
	)

    return (
		<div className="user-detail-top-container">
			{/* {!userData && <div>UserID not valid</div>} */}
        	{userData && <div className="user-detail-top-container">
            
			<div className="user-detail-cover">
                <img className="user-cover-image" src={userData.coverImageUrl}></img>
                <div className = "user-cover-transparency"></div>
            	<img className="user-profile-image" src={userData.profileImageUrl}></img>
                <p className="user-name-title">{userData.name}</p>
				<p className="user-name-username">{userData.username}</p> 
				<p className="user-name-email">{userData.email}</p> 
			</div>	
		{/* to add own posts, likes and dislikes */}
        	</div> }
		</div>
    )
}
           