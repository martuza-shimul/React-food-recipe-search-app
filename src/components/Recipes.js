import React from "react";

const Recipes = props => {
	return (
		<div>
			{props.recipes.map(recipe => {
				return (
					<div key={recipe.recipe.label}>
						<img
							src={recipe.recipe.image}
							alt={recipe.recipe.label}
							className="img-fluid"
						/>
						<p>{recipe.recipe.label}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Recipes;
