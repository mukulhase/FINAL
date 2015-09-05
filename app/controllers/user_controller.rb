class UserController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]
  def new
  end

  def create
  end

  def update
  end

  #Return list of projects
  def project_list
    @user = User.find(params[:id])
    render :json => @user.projects
  end

  def edit
  end

  def destroy
  end

  def index
    @users = User.find(params[:id])
    render :json => @users.projects
  end

  def show
  end
end
