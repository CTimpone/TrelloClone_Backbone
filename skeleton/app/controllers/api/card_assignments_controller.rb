module Api
  class CardAssignmentsController < ApiController

    def create
      @assignment = CardAssignment.create(card_assignment_params)
      if @assignment
        render json: @assignment
      else
        render json: {}
      end
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

    private

    def card_assignment_params
      params.require(:card_assignment).permit(:card_id, :user_id)
    end

  end
end
