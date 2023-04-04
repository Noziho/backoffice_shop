import './CartItem.css';
import trash from '../../../assets/img/trash.svg';

export const CartItem = function ({product, products, setIsProductUpdated}) {

    return (
        <div className={'items'}>
            <div className='cart-item'>
                <div key={product.id} className="item">
                    <div>
                        <img className="trash" src={trash} alt=""/><h3>{product.name}</h3>
                        <div className="amount">({product.cart})</div>
                    </div>
                </div>
            </div>
        </div>
    )
}