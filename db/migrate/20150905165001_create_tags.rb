class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.text :Title
      t.string :issue_id
      t.string :integer

      t.timestamps null: false
    end
    add_column :projects, :Name, :string
    add_column :projects, :Description, :text
    add_column :projects, :owner_id, :integer
    add_column :issues, :project_id, :integer
  end
end
