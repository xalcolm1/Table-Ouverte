 Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :restaurants, only: [:create, :destroy, :show, :index]
    resources :reservations, only: [:create, :update, :destroy, :show, :index]
    resources :reviews, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
    get :search, to: "restaurants#search"
  end
end
