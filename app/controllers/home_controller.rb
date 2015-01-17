class HomeController < ApplicationController
  def index
    # @TODO get editable content if available
    @attendance = Attendance.new
  end

  def create
    @attendance = Attendance.new( attendance_params )
    
    HomeMailer.send_registration_email(@attendance).deliver
    #if @attendance.save 
      #HomeMailer.send_registration_email(@attendance).deliver
      #respond_to do |format|
        #format.js
      #end
    #else
    #end
  end

private
 def attendance_params
  params.require(:attendance).permit( :body, :email )
 end 
end
