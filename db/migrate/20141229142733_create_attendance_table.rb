class CreateAttendanceTable < ActiveRecord::Migration
  def change
    create_table :attendance do |t| 
      t.string :body
      t.integer :attending
    end
  end
end
