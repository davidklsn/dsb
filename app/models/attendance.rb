class Attendance < ActiveRecord::Base
  validate :body, presence: true
  # validates :email, email_format: { message: "Din mailadress ser inte rätt ut" } 
end
