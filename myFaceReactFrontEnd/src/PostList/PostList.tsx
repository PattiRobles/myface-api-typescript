import React from "react";
import { useState, useEffect } from "react";
import "../App.scss"
import { Link, useLocation } from "react-router-dom";
import { likePost } from "../ApiClient";

//Interfaces ( copy them here - no importing from back end, we need to keep segregation between front&back end)
interface PostUserModel {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface PostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: string;
    postedBy: PostUserModel;
    likedBy: PostUserModel[];
    dislikedBy: PostUserModel[];
}

interface PageData {
    results: PostModel[];
    next: string | null;
    previous: string | null;
    total: number;

}

export function PostList() {

    const [pageData, setPageData] = useState<PageData>();

    const location = useLocation()
    //useLocation hook returns URL info - pathname, search (query string -? ) and hash segment
    //http://localhost:3000/products/school/?name=bags ------- the useLocation() object will return:{}, below
    //pathname: ‘/products/school/’, 
    //search: ‘?bags’,
    // hash: ‘’, 
    // state: undefined}
    // EVERY TIME THE URL CHANGES THE USELOCATION() OBJECT UPDATES
    // helpful when we want to triger a fx based on change to the url

    useEffect(() => {
        fetch(`http://localhost:3001/posts/${location.search}`)
            .then(response => response.json())
            .then(pageData => setPageData(pageData));

    }, [location.search]);

    function handleLikeClick(postId: number, likeDislike: string) {
        console.log("like button was clicked");
        // event.preventDefault(); Think this is not needed for a button click
        likePost(postId, likeDislike)
    }

      
     return (
        <div>
            {pageData?.results && <ul className="all-posts-container">
                {pageData.results.map((post) =>
                    <li className="single-post-container">
                         {/* <img className='post-image' src={post.imageUrl}></img>  onerror="src =*/}
                        <img 
                        className="post-image" 
                        alt="photo uploaded by user" 
                        src={post.imageUrl}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "https://cdn-multicoat-com.sfo2.digitaloceanspaces.com/wp-content/uploads/2018/08/02232112/placeholder.jpg";
                        }} />
                        <div className="single-post-text-box">
                            <Link className="link-to-user"to={`/users/${post.postedBy.id}`}>{post.postedBy.name}</Link><br/>
                             <div className="postlist-username">{post.postedBy.username}</div>
                             {post.message}

                            <div className='button-container'>
                                <button className="like-dislike-button" type="submit">❤️</button>                
                                <button className="like-dislike-button" type="submit">👎</button>
                            </div>
                     
                        </div> </li>)}
            </ul>}
<br/>
<div className='previous-next-container'>
            {pageData?.previous &&  <Link to={pageData.previous}><button className='previous-next-button'>Previous</button></Link>}            
            {<br/>}
            {pageData?.next && <Link to={pageData.next}><button className='previous-next-button'>Next</button></Link>}
            </div>
        </div>
    )
}

//line 57 - shorthand for if statement - has data arrived? yes, display it // no, blank but dont break
//line 57, 67 & 69 - show typical react pattern. R does not allow conditional statements inside evaluation blocks
//use logical and && as a shortcircuit, making use of falsy and truthy values. If first block false, shortcircuit - no further evaluation
//if 1st block true, continue to second block
