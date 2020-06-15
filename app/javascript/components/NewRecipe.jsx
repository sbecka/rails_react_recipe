import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewRecipe() {
    const [recipe, setRecipe] = useState({
        name: '',
        ingredients: '',
        instruction: ''
    });

    const stripHTMLEntities = (str) => {
        return String(str)
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

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
}