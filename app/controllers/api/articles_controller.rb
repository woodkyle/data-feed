class Api::ArticlesController < ApiController

  def index
    @key = ENV["NEWS_API_KEY"]
    @url = "https://newsapi.org/v1/articles?source=bbc-news&apiKey=" + "#{@key}"
    @articles = HTTParty.get(@url)["articles"]
    respond_to do |format|
      format.json do
        render json: @articles
      end
    end
  end

  # def setSources
  #   @sourcesArray = HTTParty.get("https://newsapi.org/v1/sources?language=en")["sources"]
  #   @sources = []
  #   @sourcesArray.each do |current_source|
  #     new_source = []
  #     new_source << current_source["id"]
  #     new_source << current_source["name"]
  #     new_source << current_source["description"]
  #     new_source << current_source["category"]
  #     new_source << current_source["urlsToLogos"]["small"]
  #     @sources << new_source
  #   end
  #
  #   @sources.each do |new_source|
  #     apiKey, name, description, category, logoUrl = new_source
  #     Source.create!(apiKey: apiKey, name: name, description: description, category: category, logoUrl: logoUrl)
  #   end
  # end

end
