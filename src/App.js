import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const APP_ID = "145c442f";
const APP_KEY = "fa595d2525ce712a15ee6856ae21d94c";

//https://api.edamam.com/search?q=chicken&app_id=145c442f&app_key=fa595d2525ce712a15ee6856ae21d94c&from=0&to=3&calories=591-722&health=alcohol-free

class App extends Component {
	state = {
		recipes: []
	};
	getRecipe = async e => {
		const recipeName = e.target.elements.recipeName.value;
		e.preventDefault();

		const api_call = await fetch(
			`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15`
		);

		const data = await api_call.json();
		this.setState({ recipes: data.hits });
		console.log(this.state.recipes);
	};

	componentDidMount = () => {
		const json = localStorage.getItem("recipes");
		const recipes = JSON.parse(json);
		this.setState({ recipes });
	};

	componentDidUpdate = () => {
		const recipes = JSON.stringify(this.state.recipes);
		localStorage.setItem("recipes", recipes);
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Recipe Search</h1>
				</header>
				<Form getRecipe={this.getRecipe} />

				<Recipes recipes={this.state.recipes} />
			</div>
		);
	}
}

export default App;
