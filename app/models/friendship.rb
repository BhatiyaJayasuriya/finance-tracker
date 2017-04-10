class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, class_name: 'User'
  # 'class_name' is the keyword we need to use for self referential association
  # use keyword 'class' in the migration file
end
