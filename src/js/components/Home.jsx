import React,{useState} from "react";



//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul className="ul">
				<li>
					<input className="input" type="text" placeholder="What do you need to do?"></input>
				</li>
				<li>Make the bed <i class="fa-solid fa-thumbs-up"></i></li>
				<li>Cooking <i class="fa-solid fa-thumbs-up"></i></li>
				<li>Clean up the room <i class="fa-solid fa-thumbs-up"></i></li>
				<li>Pick my own <i class="fa-solid fa-thumbs-up"></i></li>
			</ul>
			<div>23 tasks</div>
		</div>
	);
};

export default Home;