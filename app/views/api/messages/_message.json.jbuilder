json.id message.id
json.user_id message.user_id
json.channel_id message.channel_id
json.body message.body
json.url message.url
json.date message.created_at


json.extract! message, :id, :user_id, :channel_id, :body, :url
