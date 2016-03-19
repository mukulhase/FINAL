json.array!(@tags) do |tag|
  json.extract! tag, :id, :Title, :issue_id, :integer
  json.url tag_url(tag, format: :json)
end
