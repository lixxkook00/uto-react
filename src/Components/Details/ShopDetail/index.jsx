import * as React from 'react';
import './ShopDetail.scss'
import CartMarket from '../../Carts/CartMarket'
import MyData from '../../../data/data.json'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function ShopDetail(props) {
    let {_id} = props.match.params

    let productList = MyData.product.filter((product) => product.shopID === _id)

    const pageNumber = (Math.floor(productList.length/21))+1
    const co = productList.length%2
    console.log(pageNumber)
    console.log(co)
    console.log(productList.length/21)

    // console.log(productList)
    return (
        <div className="shop-content">
            {/* shop infor */}
            <div className="post">
                <div className="shop">
                    <div className="shop-cover">
                        <img src="./img/Hàng Mỹ Xách Tay.png" alt="" />
                    </div>
                    <div className="shop-back">
                        <div className="shop-avt">
                            <img src="./img/516D546A6B7A7239524E57524B6D554B425A78345938536D4B446B41347344737A653857697950484A7353333876.png" alt="" />
                            <div className="shop-infor-owner">
                                Quản lý bởi Kimmizin
                            </div>
                        </div>
                        <div className="shop-infor">
                            <div className="shop-infor-name">
                                Hàng Mỹ Xách Tay
                            </div>
                            <div className="shop-infor-id">
                                {_id}
                            </div>
                            
                            <div className="shop-infor-address">
                                <i className="fa-solid fa-location-pin"></i>
                                Khu Nam Viên, Khu Biệt Thự Phú Mỹ Hưng Thành phố Hồ Chí Minh
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* all product this shop */}
            <div className="post">
                <div className="market-title market-title--blue">
                    tất cả sản phẩm
                </div>
                <div className="container">
                    <div className="row">
                        
                        {
                            productList.map((product,index) => {
                                return (
                                    <CartMarket key={index} product={product}/>
                                )
                            })
                        }
                        <Stack spacing={2} className="col-xl-12">
                            <Pagination count={pageNumber} color="primary" />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopDetail;