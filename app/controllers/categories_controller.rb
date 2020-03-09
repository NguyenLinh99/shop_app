class CategoriesController < ApplicationController
  def show
    @category = Category.find(params[:id])
    @products = @category.products.all.page(params[:page]).per(CATEGORY_PAGINATES_PER)
    @order_item = current_order.order_items.new
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end


