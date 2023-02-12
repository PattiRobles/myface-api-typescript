import React from "react";
import { useState, useEffect } from "react";
import '../App.scss'
import './NavBar.scss'
import { Link } from "react-router-dom";

const ourHeader = document.getElementById("navbar-container");
console.log(ourHeader)

export function NavBar() {
	function toggleHeaderMenu() {
		ourHeader.id === "navbar-displayed" ?
			ourHeader.setAttribute("id", "") :
			ourHeader.setAttribute("id", "navbar-displayed");
	}

	//google suggests putting this into a useEffect so the window.eventListener statement doesn't load for every single page; 
	//and so that when users change pages, the event listener closes properly
	useEffect(() => {
		const handleClickOutside = function (event) {
			// Logic to handle clicks and other events outside of the menu area
			if (event.key) {
				if (ourHeader[0].id === "navbar-displayed" && event.key === "Escape")
					ourHeader[0].setAttribute("id", "")
			} else {
				if (ourHeader[0].id === "navbar-displayed" && !ourHeader[0].contains(event.target) &&
					!document.getElementById("header-open-button").contains(event.target))
					ourHeader[0].setAttribute("id", "")
			}
		};

		window.addEventListener("click", handleClickOutside);
		window.addEventListener("keydown", handleClickOutside);

		return () => {
			window.removeEventListener("click", handleClickOutside);
			window.addEventListener("keydown", handleClickOutside);

		};
	}, []);

	//In the previous myface, we imported a getPageState prop and used this with an onClick button to change the page. 
	// As we have our useParams set-up, it may be better to simply change the url in this case. The user can navigate that way
	return (
		<div>
			<div id="header-open-button" onClick={() => toggleHeaderMenu()}>
				<div className="header-menu-lines"></div>
				<div className="header-menu-lines"></div>
				<div className="header-menu-lines"></div>
			</div>

			<div id="navbar-container">
				<div className="navbar">
				<li><Link to="/posts" className="navbar-item">Posts</Link></li>
				<li><Link to="/users" className="navbar-item">Users</Link></li>
				<li><Link to="/posts/create" className="navbar-item">Create Posts</Link> </li>
				<li><Link to="/users/create" className="navbar-item">Create Users</Link></li>
				
				</div>
			</div>
		</div>
	)
}
//    

