class Api::SourcesController < ApiController

  def index
    @sources = Source.all
    respond_to do |format|
      format.json do
        render json: @sources
      end
    end
  end

end
