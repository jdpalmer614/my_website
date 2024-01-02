class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :password_digest
      t.integer :game_count
      t.integer :sets_found

      t.timestamps
    end
  end
end
