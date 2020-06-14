class Api::V1::RecipesController < ApplicationController
  def index
    recipe = Recipe.all.order(created_at: :desc)
    # sending recipes as JSON response with render
    render json: recipe
  end

  def create
    recipe = Recipe.create!(recipe_params)
    if recipe
      render json: recipe
    else
      render json: recipe.errors
    end
  end

  def show
    if recipe
      render json: recipe
    else
      render json: recipe.errors
    end
  end

  def destroy
    # safe navigation operator &., avoids nil errors when calling a method
    # delete a recipe only if it exists, then send a message as a response
    recipe&.destroy
    render json: { message: 'Recipe deleted!' }
  end

  private

  def recipe_params
    params.permit(:name, :image, :ingredients, :instruction)
  end

  def recipe
    @recipe ||= Recipe.find(params[:id])
  end

end
