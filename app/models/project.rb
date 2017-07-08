class Project < ApplicationRecord
  has_many :phases
  belongs_to :user
end
