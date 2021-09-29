# frozen_string_literal: true

class User < ActiveRecord::Base

  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :liked_posts, Array

  def self.unliked_posts(ids)
    ids = ids.empty?  ? [0] : ids
    Post.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def self.liked_posts(ids)
    ids = ids.empty? ? [0] : ids
    Post.where("id IN (?)", ids).order("RANDOM()")
  end


end
