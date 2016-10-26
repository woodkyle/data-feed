Rails.application.routes.draw do

  resources :articles, only: [:index]
  root "articles#index"

  namespace :api do
    resources :articles, only: [:index, :create]
    resources :sources, only: [:index, :create]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
