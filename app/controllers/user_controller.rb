class UserController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]
  def new
  end

  def create
  end

  def update
  end

  def edit
  end

  def destroy
  end

  def index
    @users = User.all
    render :json => @users
  end

  def show
  end
end
