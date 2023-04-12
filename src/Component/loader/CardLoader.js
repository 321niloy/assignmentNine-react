import { getShoppingCart } from "../../utilities/fakedb";
const CardLoader = async() => {
const loadProduct = await fetch('/featured.json');
const products = await loadProduct.json();

const storeCart = getShoppingCart();
const saveCart = [];
for (const id in storeCart){
    const addedProduct = products.find(pd=> pd.id === id);
    if(addedProduct){
        const quantity = storeCart[id];
        addedProduct.quantity =quantity;
        saveCart.push(addedProduct);
    }
}




return saveCart;
}
export default CardLoader;

