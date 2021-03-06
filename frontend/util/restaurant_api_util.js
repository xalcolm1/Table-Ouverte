 
export const createRestaurant = restaurant => {

    return $.ajax({
        url: "/api/restaurants",
        method: "POST",
        data:  restaurant ,//removed {}
        contentType: false,
        processData: false
    })
}
 
export const updateRestaurant = restaurant => {

    return $.ajax({
        url: "/api/restaurants",
        method: "PATCH",
        data:  restaurant ,//removed {}
        contentType: false,
        processData: false
    })
}

export const deleteRestaurant = id => {
    return $.ajax({
        url: `/api/restaurants/${id}`,
        method: "DELETE"
    })
}

export const getAllRestaurants = () => {
    return $.ajax({
        url: "/api/restaurants",
        method: "GET"
    })
}

export const getRestaurant = id => {
    return $.ajax({
        url: `/api/restaurants/${id}`,
        method: "GET" 
    })
}

export const searchRestaurants = q => {
    return $.ajax({
        url: '/api/search',
        method: 'GET',
        data: { q }
    })
}


