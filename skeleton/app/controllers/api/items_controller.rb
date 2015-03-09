module Api
  class ItemsController < ApiController
    def update
      @item = Item.find(params[:id])
      if @item.update_attributes(item_params)
        render json: @item
      else
        render json: {}
      end
    end

    private
      def item_params
        params.require(:item).permit(:done, :title)
      end

  end
end
