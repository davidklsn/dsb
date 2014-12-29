class HomeController < ApplicationController
  def index
    # @TODO get editable content if available
    @attendane = Attendance.new
  end
end
