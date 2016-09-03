json.array! @users.each do |user|
  next if user == current_user
  json.id user.id
  json.name user.username
end

# json.array! @users, partial: 'api/users/user', as: :user
