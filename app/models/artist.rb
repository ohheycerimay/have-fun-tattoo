class Artist < ApplicationRecord
    validates_presence_of :name, :bio
end
