
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../App.scss'
import { Carousel } from "react-responsive-carousel";

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
    console.log(userData?.likes)
    //const [postsCarouselIndex, setPostsCarouselIndex] = useState(0);

    // const location = useLocation();
    // const userTagAndUserId = location.pathname
    //the pathname does not give you access to the parameters

    let { userId } = useParams(); 
    //const postsCarousel = document.getElementById("posts-carousel")
    

	//can destructure the object returned by params and call it a name that makes sense

	useEffect(() => {
		fetch(`http://localhost:3001/users/${userId}`)
		.then(response => response.json())
		.then(userData => setUserData(userData))
	}, []);

    // function userPostsNextButton() {
    //     console.log("carousel next button was clicked");

    //     setPostsCarouselIndex(postsCarouselIndex + 1);
    //     if (postsCarouselIndex > (postsCarousel?.children.length - 1)) {
    //         setPostsCarouselIndex(0);
    //     }
    //     postsCarousel.style.transform = `translateX(-${postsCarouselIndex + 1 * 18}%)`;
    //  console.log("posts carousel index is equal to: " + postsCarouselIndex);
    //     console.log("posts carousel children length: " + postsCarousel?.children.length);
    // }; 
    // function userPostsPreviousButton() {
    //     console.log("carousel Previous button was clicked");

    //     setPostsCarouselIndex(postsCarouselIndex - 1);
    //     if (postsCarouselIndex < 0) {
    //         setPostsCarouselIndex(postsCarousel?.children.length - 1);
    //     }
    //     postsCarousel.style.transform = `translateX(-${postsCarouselIndex -1 * 18}%)`;
    //     console.log("posts carousel index is equal to: " + postsCarouselIndex);
    //     console.log("posts carousel children length: " + postsCarousel?.children.length);
    
	
    return (
		<div className="user-detail-top-container">
			{/* {!userData && <div>UserID not valid</div>} */}
        	{userData && <div className="user-detail-top-container">
            
			<div className="user-detail-cover">
                <img className="user-cover-image" src={userData.coverImageUrl}></img>
                <div className = "user-cover-transparency"></div>
            	<img className="user-profile-image" src={userData.profileImageUrl}></img>
                <p className="user-name-title">{userData.name}</p>
				<div className="user-name-details">
                    <p className="username">{userData.username}</p>
                    <p className="email">{userData.email}</p>
                </div> 
			</div>	
		 
         <h3 className="userdetail-title-posts">{userData.name.split(' ').slice(0,1)}'s Posts</h3>
            <div className="userdetail-posts-container" >
                    {userData.posts.map((userPost) =>
                        <div className="userdetail-single-post">
                            <img src={userPost.imageUrl} className="userdetail-post-image"></img>
                            <div className="userdetail-post-message">{userPost.message}</div>
                        </div>
                        
                    )}
            </div>

            <h3 className="userdetail-title-posts">{userData.name.split(' ').slice(0,1)}'s Liked Posts</h3>
            <div className="userdetail-posts-container" >
                    {userData.likes.map((userLikes) =>
                        <div className="userdetail-single-post">
                            <img src={userLikes.imageUrl} className="userdetail-post-image"></img>
                            <div className="userdetail-post-message">{userLikes.message}</div>
                        </div>
                    )}
            </div>

            <h3 className="userdetail-title-posts">{userData.name.split(' ').slice(0,1)}'s Disliked Posts</h3>
            <div className="userdetail-posts-container" >
                    {userData.dislikes.map((userDislikes) =>
                        <div className="userdetail-single-post">
                            <img src={userDislikes.imageUrl} className="userdetail-post-image"></img>
                            <div className="userdetail-post-message">{userDislikes.message}</div>
                        </div>
                    )}
            </div>
            
                
                {/* <button id="posts-carousel-previous-button" onClick={() => userPostsPreviousButton()} >See Previous</button>
                <button id="posts-carousel-next-button" onClick={() => userPostsNextButton()}>See More</button> */}
        	</div> }
		</div>
    )
}
           