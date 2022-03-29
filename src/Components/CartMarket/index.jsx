import React from 'react';
import './CartMarket.scss'

// rating MUI
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const formatLessThan100 = (num) => {
    let result = ""
    if (num === 0) {
        result = "000";
    }
    if (num < 10) {
        result = `00${num}`;
    }
    if (num > 10 && num < 100) {
        result = `0${num}`;
    }
    return result
}

const formatPrice = (price) => {
    const milion = Math.floor(price / 1000000)
    
    if(milion > 0){
        let finalMilion = milion + ","

        price = price - milion*1000000
        
        if (price >= 1000) {
            let front = Math.floor(price / 1000);
            let back = price % 1000;

            front = formatLessThan100(front)
            back = formatLessThan100(back)

            console.log(front)
            return `${finalMilion}${front},${back}`;
        }
    }

    if (price >= 1000) {
        let front = Math.floor(price / 1000);
        let back = price % 1000;
        
        back = formatLessThan100(back)

        return `${front},${back}`;
    }

    return price;
};

const calcPercentDiscount = (currentPrice,retailPriceice) => {
    return Math.floor((currentPrice/retailPriceice)*100)
}

function CartItem({product}) {
    // console.log(product);
    return (
        <div key={product.ID} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-4">
                  
            <a href="#" className="market-product-item box-shadow">
                {/* item img */}
                <div className="market-product-item_img">
                <img src={`./img/${product.img}`} alt="" />
                </div>

                <div className="market-product-item-infor">
                {/* item name */}
                <div className="market-product-item_name">
                    {product.Name}
                </div>

                {/* item price */}
                <div className="market-product-item_price">
                    <div className="market-product-item_price-current">
                    {formatPrice(product.currentPrice)}
                    <span className="text-underline">đ</span> 
                    </div>
                    <div className="market-product-item_price-old">
                    <div className="num">
                        {formatPrice(product.retailPrice)}
                    </div>
                    <span className="text-underline">đ</span>
                    <div className="percent">
                        {calcPercentDiscount(product.currentPrice,product.retailPrice)}%
                    </div> 
                    </div>
                </div>

                {/* item rating and locate */}
                    <div className="market-product-item_ft">
                        <div className="market-product-item_ft-rating">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={product.startRating} precision={0.5} readOnly />
                        </Stack>
                        </div>
                        <div className="market-product-item_ft-locate">
                        {product.location}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default CartItem;