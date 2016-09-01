# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ActiveRecord::Base
  validates :body, :user, :channel, presence: true

  belongs_to :user
  belongs_to :channel

  def self.message_feed(channel_id, limit = 10, max_created_at = nil)
    @messages = Message.where("messages.channel_id = :id", id: channel_id).order("messages.created_at DESC").uniq

  if max_created_at
    @messages = @messages.where("messages.created_at < :date", date: max_created_at)
  end
  return @messages.limit(limit)
  end
end
