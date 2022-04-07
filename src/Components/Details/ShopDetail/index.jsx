import React from 'react';
import './ShopDetail.scss'

function ShopDetail(props) {
    let {_id} = props.match.params
    return (
        <div className="shop-content">
            <div className="post">
                <div className="shop">
                    <div className="shop-cover">
                        <img src="" alt="" />
                    </div>
                    <div className="">
                        <div className="shop-avt">
                            <img src="" alt="" />
                        </div>
                        <div className="shop-infor">
                            <div className="shop-infor-name">
                                Hàng Mỹ Xách Tay
                            </div>
                            <div className="shop-infor-id">
                                {_id}
                            </div>
                            <div className="shop-infor-owner">
                                Quản lý bởi Kimmizin
                            </div>
                            <div className="shop-infor-address">
                                 Khu Nam Viên, Khu Biệt Thự Phú Mỹ Hưng Thành phố Hồ Chí Minh
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopDetail;