module Api
  class BoardMembershipsController < ApiController
    def create
      user = User.find_by(email: board_membership_params[:email])
      @board = Board.find(Integer(board_membership_params[:board_id]))

      debugger
      if !!user && !!@board
        p "THIS ACTUALLY HAPPENDED HAHAHAHAHAHA"
        BoardMembership.create(user: user, board_id: board_membership_params[:board_id])
      else
        p "FAILURE FAILURE FAILURE FAILURE"
      end

      render json: @board
    end

    private
      def board_membership_params
        params.require(:board_membership).permit(:email, :board_id)
      end

  end
end
