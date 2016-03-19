class Issue < ActiveRecord::Base
  belongs_to :project
  has_many :comments
  has_many :tags
end
