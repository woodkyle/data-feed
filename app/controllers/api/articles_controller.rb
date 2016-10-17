class Api::ArticlesController < ApiController

  def index
    @key = ENV["NEWS_API_KEY"]
    @url = "https://newsapi.org/v1/articles?source=cnn&apiKey=" + "#{@key}"
    @apiCall = HTTParty.get(@url)
    @articles = @apiCall["articles"]
    respond_to do |format|
      format.json do
        render json: @articles
      end
    end
  end

end
