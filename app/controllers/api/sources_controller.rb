class Api::SourcesController < ApiController

  def index
    @categories = [
      "Business",
      "Entertainment",
      "Gaming",
      "General",
      "Music",
      "Science / Nature",
      "Sports",
      "Tech"
    ]

    @sources = Source.all
    @pinned = Article.all
    @data = {
      "categories" => @categories,
      "sources" => @sources,
      "pinned" => @pinned
    }
    respond_to do |format|
      format.json do
        render json: @data
      end
    end
  end

  def create
    @source = params[:sourceTitle]
    @key = ENV["NEWS_API_KEY"]
    @url = "https://newsapi.org/v1/articles?source=" + @source + "&apiKey=" + "#{@key}"
    @articles = HTTParty.get(@url)["articles"]
    respond_to do |format|
      format.json do
        render json: @articles
      end
    end
  end

end
