class ProjectsController < ApplicationController

  def new
    @project = Project.create!(user: current_user, phases: [], title: '')
  end
end
