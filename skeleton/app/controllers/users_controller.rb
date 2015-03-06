class UsersController < ApplicationController
  def new; end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    if signed_in?
      render json: current_user
    else
      render json: {errors: "Not signed In"}
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
