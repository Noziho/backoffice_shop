import "./Product.css";

export const Product = function ({product, setIsProductUpdated}) {
    function handleMinusClick(e) {
        if (product.cart > 0) {
            product.cart -= 1;
            setIsProductUpdated(true);
        }
    }

    function handlePlusClick(e) {
        if (product.cart < product.stock) {
            product.cart += 1;
            setIsProductUpdated(true);
        }
    }

    return (
        <div className="singleProduct">
            <div className="thumbnailContainer">
                <p>{product.category.name}</p>
                <img className={'thumbnail'} src={(`/uploads/${product.image}`)} alt=""/>
            </div>


            <div className="describeProduct">
                <h3 className="productName">{product.name}</h3>
                <div className={'description'}>
                    <p className="product-description">{product.description}</p>
                </div>

                <div className={'productFooter'}>
                    <div className="quantitySelector">
                        <button className={'quantitySelectorButton'} onClick={handleMinusClick}>-</button>
                        <div>{product.cart}</div>
                        <button className={'quantitySelectorButton'} onClick={handlePlusClick}>+</button>
                    </div>

                    <div className={'price'}>
                        <span className="product-price">${product.price}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};
