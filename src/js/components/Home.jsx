import React from "react";



//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul className="ul">
				<li>Make the bed</li>
				<li>Cooking</li>
				<li>Clean up the room</li>
				<li>Pick my own</li>
			</ul>
		</div>
	);
};

export default Home;