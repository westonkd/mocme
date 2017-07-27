class PhasesApiController < ApplicationController
  before_action :verify_user

  def create
    image_data = params.require(:image)
    phase = Phase.create!(params.require(:phase).permit(:project_id, :title, :description))
    phase.images.create!(url: image_data[:link])
    render json: phase.as_json(include: :images), status: :ok
  end

  private

  def verify_user
    return if current_user == Project.find(params.require(:phase)[:project_id]).user
    head :unauthorized
  end
end
