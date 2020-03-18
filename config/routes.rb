Rails.application.routes.draw do
  devise_for :users, controllers:{omniauth_callbacks: "users/omniauth_callbacks"}
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  resources :products do
    resources :images
  end

  resources :categories
  resources :users

  root 'homes#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
