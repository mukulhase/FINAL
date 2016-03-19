class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :Content
      t.string :user_id
      t.string :integer
      t.string :issue_id
      t.string :integer

      t.timestamps null: false
    end
  end
end
