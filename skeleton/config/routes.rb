TrelloClone::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :user, only: :show
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit]
    resources :board_memberships, only: [:create]
    resources :lists, only: [:create, :update, :destroy]
    resources :card_assignments, only: [:create, :destroy]
    resources :cards, only: [:create, :update, :destroy] do
      resources :card_assignments, only: :index
    end
    resources :items, only: [:create, :update]
  end
end
