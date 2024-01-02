Rails.application.routes.draw do
  root "home#index"
  get "about/index"
  get "sign_up", to: "registrations#new"
  post "sign_up", to: "registrations#create"

  get "sign_in", to: "sessions#new"
  post "sign_in", to: "sessions#create"

  delete "logout", to: "sessions#destroy"

  get "leaderboards", to: "leaderboards#index"
  get "rules", to: "rules#index"

  get "play", to: "play#index"

  get "fulldeck", to: "fulldeck#index"
end
