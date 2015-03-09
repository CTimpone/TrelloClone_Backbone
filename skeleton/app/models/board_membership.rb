# == Schema Information
#
# Table name: board_memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  board_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class BoardMembership < ActiveRecord::Base
  validates :user, :board_id, presence: true
  validates :user_id, uniqueness: {scope: :board_id}

  belongs_to :user
  belongs_to :board
end
