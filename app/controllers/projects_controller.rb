class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all
    render :json => @projects
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
  end

  #GET projects/issues
  def project_issues
  end
  # GET /projects/new
  def new
    @project = Project.new
    @project.owner_id = params[:user_id]
  end


  #Add new user to project
  def add_user
    @user = User.find(params[:user_id])
    @project = Project.find(params[:id])
    @project.users << @user
    redirect_to projects_url
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(owner_id: params[:owner_id], Name: params[:Name], Description: params[:Description])
    @user = User.find(params[:owner_id])
    @project.users << @user
    respond_to do |format|
      if @project.save
        format.html { redirect_to @project, notice: 'Project was successfully created.' }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    respond_to do |format|
      if @project.update(params[project_params])
        format.html { redirect_to @project, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  #Return list of projects
  def project_list
    @user = User.find(params[:id])
    render :json => @user.projects
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params[:project]
    end
end
