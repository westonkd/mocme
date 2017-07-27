class Image < ApplicationRecord
  validates :url, presence: true
  belongs_to :phase
  before_save :infer_stars

  private

  def infer_stars
    self.stars ||= 0
  end
end
