class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :require_user
  helper_method :current_user

  def require_user
    redirect_to '/auth/google_oauth2' if current_user.blank?
  end

  def current_user
    @_current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
