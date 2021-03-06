class HomesController < ApplicationController
  def index
    @products = @q.result(distinct: true).page(params[:page]).per(HOME_PAGINATES_PER)
    if current_user
      @cart = Cart.create(user: current_user)
      @order_item = @cart.order_items.new
    end
  end

  def show
    @product = Product.find(params[:id])
  end

  private
  def product_params
    params.require(:product).permit(:name, :price)
  end
end
