class HomeController < ApplicationController
  def index
    # @TODO get editable content if available
    @attendance = Attendance.new
  end

  def create
    byebug


    respond_to do |format|
      format.js
    end
  end
end
