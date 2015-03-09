TrelloClone::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :user, only: :show
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit]
    resources :board_memberships, only: [:create]
    resources :lists, only: [:create, :update, :destroy]
    resources :cards, only: [:create, :update, :destroy]


    # resources :items
    # resources :card_assignments
  end
end
