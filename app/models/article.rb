class Article < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :url, presence: true, uniqueness: :true
  validates :urlToImage, presence: true
end
