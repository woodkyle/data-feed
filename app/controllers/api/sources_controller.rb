class Api::SourcesController < ApiController

  # business, entertainment, gaming, general, music, science-and-nature, sport, technology

  def index

    @categories = [
      "business",
      "entertainment",
      "gaming",
      "general",
      "music",
      "science-and-nature",
      "sport",
      "technology"
    ]
    respond_to do |format|
      format.json do
        render json: @categories
      end
    end

  end

end
