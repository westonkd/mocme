class CreatePhase < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.belongs_to :user, index: true
      t.string :title
      t.text :description
      t.timestamps
    end

    create_table :phases do |t|
      t.belongs_to :project, index: true
      t.string :title
      t.text :description
      t.timestamps
    end

    create_table :images do |t|
      t.belongs_to :phase
      t.text :url
      t.text :embed
      t.integer :stars
    end
  end
end
