import './ProductStockStatus.css';
import PropTypes from "prop-types";
import {Color} from "../../Classes/Color";

export const ProductStockStatus = function ({ stock, colors}) {
    const style = stock > 0 ? {color: colors.inStock.getStockColor()}:{color: colors.noStock.getStockColor()};
    // let stock = props.stock;
    // stock = stock +1;

    return (
        <span style={style}>({stock})</span>
    );
}

ProductStockStatus.defaultProps = {
    stock: 0,
    colors: {
        inStock: new Color('green'),
        noStock: new Color('red'),
    }
}

ProductStockStatus.propTypes = {
    stock : PropTypes.number.isRequired,
    colors: PropTypes.shape({
        inStock: PropTypes.instanceOf(Color),
        noStock: PropTypes.instanceOf(Color),
    })
}
