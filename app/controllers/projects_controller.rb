class ProjectsController < ApplicationController
  def new
    @project = Project.create!(user: current_user, phases: [], title: '')
    @props = new_props
  end

  private

  def new_props
    {
      createProjectImage: view_context.image_url('brick-hill.jpg')
    }
  end
end
