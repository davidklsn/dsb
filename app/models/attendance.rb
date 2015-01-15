class Attendance < ActiveRecord::Base
  validates :body, presence: { message: 'Du måste ange ' }
  validates :email, presence: true
#  validates :email, uniqueness: true, on: :create
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end
