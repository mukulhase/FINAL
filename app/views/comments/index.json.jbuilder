json.array!(@comments) do |comment|
  json.extract! comment, :id, :Content, :user_id, :integer, :issue_id, :integer
  json.url comment_url(comment, format: :json)
end
