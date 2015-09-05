class AddingAttributes < ActiveRecord::Migration
  def change
    add_column :issues, :Description, :text
    add_column :comments, :Description, :text
    add_column :projects, :Name, :string
    add_column :projects, :Description, :text
    add_column :projects, :owner_id, :integer 

  end
end