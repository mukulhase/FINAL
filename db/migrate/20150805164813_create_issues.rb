class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.string :Title
      t.string :Description
      t.integer :Assignee

      t.timestamps null: false
    end
  end
end
