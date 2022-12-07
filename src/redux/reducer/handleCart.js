const cart = [];

export const handleCart =(state= cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // for checking already exist products
            const exist = state.find((x) => x.id === product.id)
            if (exist) {
                // increasing qty of product
                return state.map((x) => x.id == product.id ? {...x, qty: x.qty + 1} : x );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            break;

        case "DELETEITEM" :
            const existForDelete =  state.find((x) => x.id === product.id)
            if(existForDelete.qty === 1) {
                return state.filter((x) => x.id !== existForDelete.id);
            } else {
                return state.map((x) => x.id == product.id ? {...x, qty: x.qty - 1} : x )
            }
            break

        case "DELITEM" :
            return state = state.filter((x) =>{
                return x.id !== action.payload.id
            });
            break

        default:
            return state;
            break;
    }
}