class ArticlesController < ApplicationController

  def show
    # This is bad practice because 
    @article = Article.find(params[:id])
  end

  def index
    @articles = Article.all
  end

end