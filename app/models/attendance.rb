class Attendance < ActiveRecord::Base
  validate :body, presence: true
end
