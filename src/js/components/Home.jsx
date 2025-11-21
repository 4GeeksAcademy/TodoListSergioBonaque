import React,{useState} from "react";
import Title from "./Title.jsx"
import TodoContainer from "./TodoContainer.jsx"
//create your first component
const Home = () => {
	return (
		<div className="container">
		<Title/>
			<TodoContainer/>
			<div>23 tasks</div>
		</div>
	);
};

export default Home;