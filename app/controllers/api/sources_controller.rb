class Api::SourcesController < ApiController

  # business, entertainment, gaming, general, music, science-and-nature, sport, technology

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
    respond_to do |format|
      format.json do
        render json: @categories
      end
    end

  end

end
