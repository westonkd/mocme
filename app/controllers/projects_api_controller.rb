class ProjectsApiController < ApplicationController
  def create
    project_params = params.require(:project).permit(:description, :title)
    project = Project.create!(project_params.merge(user: current_user))
    render json: project, status: :created
  end
end
