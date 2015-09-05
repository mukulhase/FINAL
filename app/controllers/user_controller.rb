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
    @users = User.all[0]
    render :json => @users.projects
  end

  def show
  end
end
