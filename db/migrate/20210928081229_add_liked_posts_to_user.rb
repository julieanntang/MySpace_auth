class AddLikedPostsToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :liked_posts, :string
  end
end
