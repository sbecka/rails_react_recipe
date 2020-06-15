import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function NewRecipe() {
    const [recipe, setRecipe] = useState({
        name: '',
        ingredients: '',
        instruction: ''
    });

    let history = useHistory();

    const handleRecipe = (event) => {
        const { name, value } = event.target;

        setRecipe(previousValue => {
            if (name === 'name') {
                return {
                  name: value,
                  ingredients: previousValue.ingredients,
                  instruction: previousValue.instruction
                };
              } else if (name === 'ingredients') {
                return {
                  name: previousValue.name,
                  ingredients: value,
                  instruction: previousValue.instruction
                };
              } else if (name === 'instruction') {
                return {
                  name: previousValue.name,
                  ingredients: previousValue.ingredients,
                  instruction: value
                };
              }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = '/api/v1/recipes/create';
        const { name, ingredients, instruction } = recipe;

        if (name.length == 0 || ingredients.length == 0 || instruction.length == 0)
            return;

        const body = {
            name,
            ingredients,
            instruction
        };
        
        // To protect against Cross-Site Request Forgery (CSRF) attacks, Rails attaches a CSRF security token to the HTML document.
        // This token is required whenever a non-GET request is made.
        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url, {
                method: "POST",
                headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
                .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
                })
                .then(res => history.push(`/recipe/${res.id}`))
                .catch(error => console.log(error.message));
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                    <h1 className="font-weight-normal mb-5">
                        Add a new recipe to our awesome recipe collection.
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="recipeName">Recipe name</label>
                            <input
                            type="text"
                            name="name"
                            id="recipeName"
                            className="form-control"
                            required
                            onChange={handleRecipe}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="recipeIngredients">Ingredients</label>
                            <input
                            type="text"
                            name="ingredients"
                            id="recipeIngredients"
                            className="form-control"
                            required
                            onChange={handleRecipe}
                            />
                            <small id="ingredientsHelp" className="form-text text-muted">
                                Separate each ingredient with a comma.
                            </small>
                        </div>
                        <label htmlFor="instruction">Preparation Instructions</label>
                        <textarea
                            className="form-control"
                            id="instruction"
                            name="instruction"
                            rows="5"
                            required
                            onChange={handleRecipe}
                        />
                        <button type="submit" className="btn custom-button mt-3">
                            Create Recipe
                        </button>
                        <Link to="/recipes" className="btn btn-link mt-3">
                            Back to recipes
                        </Link>
                    </form>
                </div>
            </div>
        </div>        
    );
}

export default NewRecipe;