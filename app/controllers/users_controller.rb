class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def create
        new_user = User.create!(user_params)
        session[:user_id] = new_user.id
        render json: new_user, status: :created
    end

    def show
        render json: User.find(session[:user_id]), status: :ok
    end
end
