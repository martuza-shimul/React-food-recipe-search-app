import React, { Component } from "react";
import { Link } from "react-router-dom";

class Recipe extends Component {
	render() {
		const recipeData = this.props.location.state.recipe;
		console.log(recipeData);
		return (
			<div className="container">
				<div className="active-recipe">
					<img
						className="active-recipe__img"
						src={recipeData.image}
						alt={recipeData.label}
					/>
					<h3 className="active-recipe__title">{recipeData.label}</h3>
					<h4 className="active-recipe__publisher">
						Publisher: <span>{recipeData.source}</span>
					</h4>
					<p className="active-recipe__website">
						Website:{" "}
						<span>
							<a href={recipeData.url}>{recipeData.url}</a>
						</span>
					</p>
					<button className="active-recipe__button">
						<Link to="/">Go Home</Link>
					</button>
				</div>
			</div>
		);
	}
}

export default Recipe;
