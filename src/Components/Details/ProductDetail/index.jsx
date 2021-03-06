import React, {useState,useEffect,useRef} from 'react';
import './ProductDetail.scss'

// link router
import {Link} from 'react-router-dom'

// rating MUI
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import CartMarket from '../../Carts/CartMarket'

import myData from "../../../data/data.json"

const formatLessThan100 = (num) => {
    let result = num
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
        
        let front = Math.floor(price / 1000);
        let back = price % 1000;

        front = formatLessThan100(front)
        back = formatLessThan100(back)

        // console.log(front, back)
        
        return `${finalMilion}${front},${back}`;
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
    // get ID product
    let {_id} = props.match.params
    
    // get product infor
    const currentProduct = myData.product.find(product => product.ID === _id)

    // console.log(currentProduct.startRating)

    // handle quantity change
    const [totalQuantity,setTotalQuantity] = useState(0);
    const increase = () => {
        setTotalQuantity(totalQuantity+1)
    }
    const decrease = () => {
        if(totalQuantity > 0){
            setTotalQuantity(totalQuantity-1)
        }
    }
    // handle input value
    const handleInputValue = (num) => {
        if(num ===''){
            setTotalQuantity(0)
        }else{
            const intNum = parseInt(num)
            setTotalQuantity(intNum)
        }
    } 

    // handle auto scroll to top
    const myRef = useRef(null)
    useEffect(() =>{
        myRef.current.scrollIntoView()  
    },[])

    useEffect(() => {
        myRef.current.scrollIntoView()
        setTotalQuantity(0)
    },[props.location.pathname])

    return (
        <div className="all-content" ref={myRef}>
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
                                    <Rating name="half-rating-read" defaultValue={currentProduct.startRating ? currentProduct.startRating : 0} precision={0.5} readOnly />
                                </Stack>
                            </div>
                            <div className="product-infor-vote-item">
                                0 ????nh gi??
                            </div>
                            <div className="product-infor-vote-item">
                                {currentProduct.sold}  ???? b??n
                            </div>
                        </div>
                        {/* price */}
                        <div className="product-infor-price">
                            <div className="product-infor-price-current">
                                {formatPrice(currentProduct.currentPrice)}
                            </div>
                            <div className="dflex">
                                <div className="product-infor-price-retail">
                                   {currentProduct.retailPrice != 0 && formatPrice(currentProduct.retailPrice)}
                                </div>

                                {
                                    currentProduct.retailPrice != 0 
                                    && 
                                    <div className="product-infor-price-percent">
                                        -{calcPercentDiscount(currentProduct.currentPrice,currentProduct.retailPrice)}%
                                    </div>
                                }
                                
                            </div>
                        </div>
                        {/* quantity */}
                        <div className="product-infor-quantity">
                            <div className="product-infor-quantity-title">
                                S??? l?????ng
                            </div>
                            <div className="product-infor-quantity-control">
                                 <div onClick={() => decrease()} className={`control-btn control-decrease ${totalQuantity===0 && "disable"}`}>
                                    <i className="fa-solid fa-minus"></i>
                                </div>

                                <input 
                                    type="text" 
                                    pattern="[0-9]*" 
                                    className="control-value" 
                                    value={totalQuantity} 
                                    onChange={(e) => handleInputValue(e.target.value)}
                                />

                                <div onClick={() => increase()} className=" control-btn control-increase">
                                    <i className="fa-solid fa-plus"></i>
                                </div>

                               
                            </div>
                            <div className="product-infor-quantity-avaiable">
                                {currentProduct.available}  s???n ph???m c?? s???n
                            </div>
                        </div>
                        {/* <p class="text-danger">V?????t qu?? s??? l?????ng s???n ph???m c??n l???i</p> */}
                        { totalQuantity - parseInt(currentProduct.available) > 0 && <p className="text-danger">V?????t qu?? s??? l?????ng s???n ph???m c??n l???i</p> }
                        {/* buttons */}
                        <div className="product-infor-button">
                            <div className="product-infor-button-addtocart second-button">
                                <i className="fa fa-cart-plus mr-10"></i>
                                Th??m v??o gi??? h??ng
                            </div>
                            <div className="product-infor-button-buynow primary-button">
                                Mua ngay
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* infor shop */}
            <div className="post">
                <div className="shop">
                    <div className="shop-avt">
                        <img src="./img/516D546A6B7A7239524E57524B6D554B425A78345938536D4B446B41347344737A653857697950484A7353333876.png" alt="" />
                    </div>

                    <div className="shop-infor">
                        <div className="shop-infor-name">
                            H??ng M??? X??ch Tay
                        </div>
                        <div className="shop-infor-owner">
                            <p>Qu???n l?? b???i</p>
                            <a href="">
                                Kimmizin
                            </a>
                        </div>
                        <div className="shop-infor-location">
                            <p>?????a ch??? </p>
                            <p>Khu Nam Vi??n, Khu Bi???t Th??? Ph?? M??? H??ng Th??nh ph??? H??? Ch?? Minh</p>
                        </div>
                        <Link to={`/shop/${currentProduct.shopID}`} className="primary-button shop-btn">
                            <i className="fa-solid fa-shop"></i> Xem Shop
                        </Link>
                    </div>
                </div>
            </div>

            {/* recommend list item */}
            <div className="post">
                {/* title */}
                <div className="market-title market-title--blue">
                    M???t h??ng m???i
                </div>
                
                <div className="container">
                    <div className="row">
                        {
                            myData.product.map((product,index) => {
                                return (
                                    <CartMarket key={index} product={product}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;