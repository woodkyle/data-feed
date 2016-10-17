class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :author
      t.string :title, null: false
      t.string :description, null: false
      t.string :url, null: false
      t.string :urlToImage, null: false
      t.string :publishedAt
    end
  end
end
