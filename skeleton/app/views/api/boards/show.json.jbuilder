# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.extract! @board, :title, :user_id, :id

json.set! :author do
  json.extract! @board.user, :email
end

json.set! :members do
  json.array! (@board.members) do |member|
    json.extract! member, :email
  end
end

json.set! :lists do
  json.array! (@board.lists) do |list|
    json.extract! list, :title, :board_id, :ord, :id
    json.cards list.cards do |card|
      json.extract! card, :title, :list_id, :description, :ord, :id
      json.assignments card.assigned_users do |user|
        json.extract! user, :email
      end
    end
  end
end
