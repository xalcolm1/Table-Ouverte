class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user 
            login!(@user)
            render '/api/users/show'
            # render json: @user
        else
            render json: ['invalid login information'],status: 401

        end
    end

    def destroy
        if logged_in? 
            logout!
            render json: {}
        else
            render json: ["you are not logged in ;)"], status: 422
        end
    end

end
