class User < ApplicationRecord
	before_create :set_default_values

	private

	has_secure_password
	validates :user_name, presence: true, uniqueness: true
	validates_format_of :user_name, with: /\A(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d_-]{5,20}\z/, message: "should contain at least one letter and one digit, and be between 5 and 20 characters in length"

	def set_default_values
    	self.game_count ||= 0
    	self.sets_found ||= 0
  	end
end
