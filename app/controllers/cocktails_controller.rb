require 'net/http'
require 'uri'

class CocktailsController < ApplicationController
    def index
        render json: {"message": "invalid"}
    end
    # def show
    #     s_query = params[:cocktail]
    #     url = URI('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+s_query.to_s
    #     http = Net::HTTP.new(url.host, url.port)
    #     request = Net::HTTP::Get.new(url)
    #     response = http.request(request)
    #     @cocktail = response.read_body
    #     render json: @cocktail
    # end

    def show
        uri = URI('https://www.thecocktaildb.com/api/json/v1/1/search.php')
        @query = params[:s]
        uri.query = URI.encode_www_form({:s => @query})
        res = Net::HTTP.get_response(uri)
        render json: res.body if res.is_a?(Net::HTTPSuccess)
    end
end
