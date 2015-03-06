json.array! (lists) do |list|
  json.(list :title, :board_id, :ord, :id)
  json.cards list.cards do |card|
    json.(card :title, :list_id, :description, :ord)
  end
end
