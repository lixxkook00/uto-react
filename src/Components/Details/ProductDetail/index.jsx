import React, {useState} from 'react';
import './ProductDetail.scss'

// rating MUI
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import myData from "../../../data/data.json"

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
    return 100-Math.floor((currentPrice/retailPriceice)*100)
}



function ProductDetail(props) {
    let {_id} = props.match.params
    const currentProduct = myData.product.find(product => product.ID === _id)

    const [totalQuantity,setTotalQuantity] = useState(0);

    const increase = () => {
        setTotalQuantity(totalQuantity+1)
    }

    const decrease = () => {
        if(totalQuantity > 0){
            setTotalQuantity(totalQuantity-1)
        }
    }

    return (
        <>
            {/* infor product */}
            <div className="post">
                <div className="product">
                    <div className="product-img">
                        <img src={`./img/${currentProduct.img}`} alt="" />
                    </div>
                    <div className="product-infor">
                        {/* name */}
                        <div className="product-infor-name">
                            {currentProduct.Name}
                        </div>
                        {/* vote */}
                        <div className="product-infor-vote">
                            <div className="product-infor-vote-item">
                                <div>
                                    0
                                </div>
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={currentProduct.startRating} precision={0.5} readOnly />
                                </Stack>
                            </div>
                            <div className="product-infor-vote-item">
                                0 đánh giá
                            </div>
                            <div className="product-infor-vote-item">
                                0 đã bán
                            </div>
                        </div>
                        {/* price */}
                        <div className="product-infor-price">
                            <div className="product-infor-price-current">
                                {formatPrice(currentProduct.currentPrice)}
                            </div>
                            <div className="dflex">
                                <div className="product-infor-price-retail">
                                   {formatPrice(currentProduct.retailPrice)}
                                </div>
                                <div className="product-infor-price-percent">
                                    d -{calcPercentDiscount(currentProduct.currentPrice,currentProduct.retailPrice)}%
                                </div>
                            </div>
                        </div>
                        {/* quantity */}
                        <div className="product-infor-quantity">
                            <div className="product-infor-quantity-title">
                                Số lượng
                            </div>
                            <div className="product-infor-quantity-control">
                                <div onClick={() => increase()} className=" control-btn control-increase">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <input type="text" pattern="[0-9]*" className="control-value" value={totalQuantity}/>
                                <div onClick={() => decrease()} className={`control-btn control-decrease ${totalQuantity===0 && "disable"}`}>
                                    <i className="fa-solid fa-minus"></i>
                                </div>
                            </div>
                            <div className="product-infor-quantity-avaiable">
                                {currentProduct.available}  sản phẩm có sẵn
                            </div>
                        </div>
                        {/* buttons */}
                        <div className="product-infor-button">
                            <div className="product-infor-button-addtocart second-button">
                                <i className="fa fa-cart-plus mr-10"></i>
                                Thêm vào giỏ hàng
                            </div>
                            <div className="product-infor-button-buynow primary-button">
                                Mua ngay
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;