module Api
  class BoardMembershipsController < ApiController
    def create
      user = User.find_by(email: board_membership_params[:email])

    end

    private
      def board_membership_params
        params.require(:board_membership).permit(:email, :board_id)
      end

  end
end
