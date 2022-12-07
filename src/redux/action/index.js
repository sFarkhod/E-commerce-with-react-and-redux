// for adding to cart

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// for deleting from cart

export const deleteCart = (product) => {
    return {
        type: "DELETEITEM",
        payload: product
    }
}


// for deleting all product(part)

export const deleteCartAll = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}