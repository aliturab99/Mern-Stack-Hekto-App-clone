export const addToCartActionTypes = {
    ADD_TO_CART: "addToCart",
    DELETE_FROM_CART: "deleteFromCart",
    UPDATE_IN_CART: "updateInCart"
}

// Add Product Action Creater
export const addProductToCart = (product) => {
    let cartProducts = localStorage.getItem("cartProducts")
    if (!cartProducts) {
        const cartProductArray = []
        cartProductArray.push(product)
        localStorage.setItem('cartProducts', JSON.stringify(cartProductArray));
    } else {
        cartProducts = JSON.parse(cartProducts)
        cartProducts.push(product)
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }
}



// Delete Action Creater
export const deleteProduct = (productId) => {
    let cartProducts = localStorage.getItem("cartProducts")
    if(cartProducts){
        localStorage.removeItem('cartProducts')
        cartProducts = JSON.parse(cartProducts)
        let removeCartItem = cartProducts.filter( product => {
            if(product._id !== productId) return true;
            else return false
        })
        localStorage.setItem('cartProducts', JSON.stringify(removeCartItem));
    }
    
}

export const resetCart = () => {
    localStorage.removeItem('cartProducts')
}