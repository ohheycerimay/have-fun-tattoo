Rails.application.routes.draw do
  resources :artists, only: [:index, :create, :destroy]
  # resources :users, only: [:update]
  
  post '/login', to: 'sessions#create'
  get '/auth', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
end
