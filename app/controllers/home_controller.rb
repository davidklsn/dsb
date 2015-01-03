class HomeController < ApplicationController
  def index
    # @TODO get editable content if available
    @attendance = Attendance.new
  end

  def create
    @attendance = Attendance.new( attendance_params )

    if @attendance.save 
      respond_to do |format|
        format.js
      end
    else

    end
  end

private
 def attendance_params
  params.require(:attendance).permit( :body, :email )
 end 
end
