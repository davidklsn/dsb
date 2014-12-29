class CreateAttendanceTable < ActiveRecord::Migration
  def change
    create_table :attendances do |t|
      t.string :body
      t.integer :attending
    end
  end
end
