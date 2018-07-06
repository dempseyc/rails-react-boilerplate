Rails.application.routes.draw do
  resources :quotes
  # get 'pages/root'
  root to: "pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
