class CreateSources < ActiveRecord::Migration[5.0]
  def change
    create_table :sources do |t|
      t.string :apiKey, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.string :category, null: false
      t.string :logoUrl, null: false
    end
  end
end
