class RegistrationsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path, notice: "New User Created"
    else
      render :new, status: :unprocessable_entity
    end 
    #flash.clear  
  end 

  def user_params
    params.require(:user).permit(:user_name, :password, :password_confirmation)
  end 
end