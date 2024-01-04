class SessionsController < ApplicationController
  def new 
  end 

  def create 
    user = User.find_by(user_name: params[:user_name])
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to menu_path, notice: "You have logged In!"
    else 
      flash.now[:alert] = "Invalid username or password"
      render :new, status: :unprocessable_entity
    end 
    #flash.clear
  end 

  def destroy
    session[:user_id] = nil 
    redirect_to root_path
  end
end