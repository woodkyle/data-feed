class Api::ArticlesController < ApiController

  def create
    @article = Article.create(article_params)
    @articles = Article.all
    if @articles.length > 30
      Article.first.destroy
      @articles = Article.all
    end
    @articles = @articles
    respond_to do |format|
      format.json do
        render json: @articles
      end
    end
  end

  protected

  def article_params
    params.permit(:author, :title, :description, :url, :urlToImage, :publishedAt)
  end

end
