class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, class_name: 'User'
  # since we don't have a 'friend' class we need to specify from what class it associated from:'
  # class_name' is the keyword we need to use for self referential association
  # use keyword 'class' in the migration file
end
