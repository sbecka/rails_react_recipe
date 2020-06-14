Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'recipes/index'
      post 'recipes/create'
      get '/show/:id', to: 'recipes#show'
      delete '/destroy/:id', to: 'recipes#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index' # directs any requests that don’t match the existing routes to the index action of the homepage controller
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
