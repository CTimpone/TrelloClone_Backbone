module Api
  class CardAssignmentsController < ApiController

    def create
    end

    def destroy
      @assignment = CardAssignment.find(params[:id])
      @assignment.destroy!
      render json: {}
    end

    def index
      @assignments = Card.find(params[:card_id]).card_assignments
      if @assignments
        render json: @assignments
      else
        render json: {}
      end
    end

  end
end
