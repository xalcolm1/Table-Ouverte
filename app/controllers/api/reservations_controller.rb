class Api::ReservationsController < ApplicationController
    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            render json: @reservation
        else
            render json: @reservation.errors.full_messages, status: 401
        end
    end

    def destroy
        @reservation = Reservation.find_by(id: params(:id))
        if @reservation.destroy
            render json: @reservation
        else
            render json: @reservation.errors.full_messages, status: 422
        end

    end

    def reservation_params
        params.require(:reservation).permit(:user_id, :restaurant_id, :date)
    end
end