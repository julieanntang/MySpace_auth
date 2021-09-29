class Api::PostsController < ApplicationController
  before_action :authenticate_user!, except:[:all]


  def all
    render json: Post.all
  end

  def index
    render json: User.unliked_posts(current_user.liked_posts)
  end


  def update
    current_user.liked_posts << params[:id].to_i
    current_user.save
  end

  def my_posts
    render json: User.liked_posts(current_user.liked_posts)
  end




end
