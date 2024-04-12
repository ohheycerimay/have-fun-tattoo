class ArtistsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: Artist.all, status: :ok
    end

    def create
        new_artist = Artist.create!(artist_params)
        render json: new_artist, status: :created
    end

    def update
        artist = Artist.find(params[:id])
        artist.update!(artist_params)
        render json: artist, status: :accepted
    end

    def destroy
        Artist.find(params[:id]).destroy
        head :no_content
    end

    private
    def artist_params
        params.permit(:name, :bio, :insta)
    end
end
