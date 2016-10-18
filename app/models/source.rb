class Source < ApplicationRecord
  validates :apiKey, presence: true
  validates :name, presence: true
  validates :description, presence: true
  validates :category, presence: true
  validates :logoUrl, presence: true
end
