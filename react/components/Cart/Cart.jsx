import './Cart.css';
import {CartItem} from '../CartItem/CartItem';

export const Cart = function ({products, setIsProductUpdated})  {
    function handleClick(e) {
        products.map(product => product.cart = 0);
        setIsProductUpdated(true);
    }

    return(
        <div className='cart'>
            <div className="cart-header">
                <h2>Vos articles</h2>
            </div>
            <div className="cart-content">
                {products.map( product =>
                    product.cart > 0 && <CartItem setIsProductUpdated={setIsProductUpdated} products={products} key={product.id} product={product}/>
                )}
            </div>
            <div className="cart-footer">
                <button onClick={handleClick}>Vider le panier</button>
            </div>
        </div>
    )
}