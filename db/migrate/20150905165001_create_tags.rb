class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.text :Title
      t.string :issue_id
      t.string :integer

      t.timestamps null: false
    end
  end
end
