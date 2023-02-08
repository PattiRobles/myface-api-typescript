import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import '../App.scss'
import './UserList.scss'

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

interface PageData {
    results: PostModel[];
    next: string | null;
    previous: string | null;
    total: number;
}

export function UserList() {
    const [userList, setUserList] = useState<PageData>();
    const location = useLocation()

    useEffect(() => {
        fetch(`http://localhost:3001/users/${location.search}`)
            .then(response => response.json())
            .then(userList => setUserList(userList));
    
    }, [location.search]);

    return (
        <div>
            
          {userList?.results && <ul className="usersList-container">
            {userList.results.map((user)=>
			<li className="individual-user">
            	<img className="profile-picture" src={user.profileImageUrl}></img>
                <h3 className="user-detail"><Link to={`/users/${user.id}`}>{user.name}</Link></h3>
				<p className="user-detail">{user.username}</p> 
			</li>	
			)}
                    </ul>}
        <div className='previous-next-container'>
            {userList?.previous && <Link to={userList.previous}><button className='next-previous-button'>Previous</button></Link>}
            {<br/>}
            {userList?.next && <Link to={userList.next}><button className='next-previous-button'>Next</button></Link>}
            </div>
        </div>
    
    )
}


