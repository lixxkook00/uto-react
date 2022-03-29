import React from 'react';
import './MMSCommunity.scss'


const postList = [
    {
        idPost:0,
        userAvt:'author-image.png',
        userName:'Unie',
        productName:'Mặt nạ trắng da, ngăn ngừa lão hóa, thải độc cho da',
        productLink:'',
        postTime:'Khoảng 3 tháng trước',
        postContent:'Sắp đến Tết rồi, cùng làm đẹp thôi các nàng ơi Shop mình còn nhiều mặt hàng về làm đep lắm nè, ghé xem và rinh về các sản phẩm ưng ý nhé !!! https://uniehouse.uto.vn/',
        postImg:'product-image.jpg',
        likeQuantity:'10',
        commentQuantity:'6',
        shareQuantity:'1',
    },
    {
        idPost:1,
        userAvt:'author-image.png',
        userName:'Lê Hoàng Anh',
        productName:'Siro tỏi đen Chosun',
        productLink:'',
        postTime:'Khoảng 3 tháng trước',
        postContent:'Khi bé ho hay sổ mũi là cha mẹ lo sốt vía, họ luôn thầm ước có sản phẩm nào đó cho con dùng mỗi ngày để phòng bệnh mà không có tác dụng phụ, hoặc khi bệnh có sản phẩm nào đó sử dụng an toàn, hiệu quả cho bé.',
        postImg:'product-image (1).jpg',
        likeQuantity:'8',
        commentQuantity:'3',
        shareQuantity:'0',
    },
    {
        idPost:2,
        userAvt:'author-image.png',
        userName:'Nguyễn Hữu',
        productName:'Giày nam siêu chất',
        productLink:'',
        postTime:'Khoảng 4 tháng trước',
        postContent:'THÔNG TIN SẢN PHẨM: Mã sản phẩm: Dr608 Size: 39 - 44 Màu sắc: Cao thêm 5cm tính cả đế cả ngày năng động.',
        postImg:'product-image (5).jpg',
        likeQuantity:'3',
        commentQuantity:'0',
        shareQuantity:'0',
    },
    {
        idPost:3,
        userAvt:'author-image.png',
        userName:'Nguyễn Hữu',
        productName:'Nón kèm khẩu trang',
        productLink:'',
        postTime:'Khoảng 4 tháng trước',
        postContent:'MLB. Nón kèm khẩu trang. Mua 1 mà đc 2 siêu lãi. Ưng ib ạ',
        postImg:'product-image (3).jpg',
        likeQuantity:'4',
        commentQuantity:'1',
        shareQuantity:'0',
    },
]

function MMSCommunity(props) {
    return (
        <div className="community">

            {
                postList.map((item,index) => {
                    return (
                        <div key={item.idPost} className="post">
                        {/* POST infor */}
                        <div className="post-infor">
                            <img src={`./img/${item.userAvt}`} alt="" className="post-infor_avt" />
                            <div className="post-infor-text">
                                <div className="name">
                                    {item.userName}
                                </div>
                                <div className="time-posted">
                                    {item.postTime}
                                </div>
                            </div>
                        </div>

                        {/* POST Content */}
                        <div className="post-content">
                            <div className="post-content-product-name">
                                <a href>
                                    {item.productName}
                                </a>
                            </div>
                            <div className="post-content-decs">
                                {item.postContent}
                            </div>

                            {/* main img */}
                            <div className="post-content-img">
                                <a href>
                                    <img src={`./img/${item.postImg}`} alt="" />
                                </a>
                            </div>

                            {/* like - comment - share infor */}
                            <div className="post-comment-infor">
                                <div className="liked">
                                    {item.likeQuantity} lượt thích
                                </div>
                                <div className="comment-share">
                                    <div className="comment">
                                        {item.commentQuantity} bình luận
                                    </div>
                                    <div className="share">
                                        {item.shareQuantity} lượt chia sẻ
                                    </div>
                                </div>
                            </div>

                            <div className="post-line"></div>

                            {/* option buttons */}

                            <div className="post-buttons">
                                <div className="post-button">
                                    <div className="post-button-icon">
                                        <i className="far fa-thumbs-up"></i>
                                    </div>
                                    <div className="post-button-text">
                                        Thích
                                    </div>
                                </div>
                                <div className="post-button">
                                    <div className="post-button-icon">
                                        <i className="far fa-comment"></i>
                                    </div>
                                    <div className="post-button-text">
                                        Bình luận
                                    </div>
                                </div>
                                <div className="post-button">
                                    <div className="post-button-icon">
                                        <i className="fas fa-share"></i>
                                    </div>
                                    <div className="post-button-text">
                                        Chia sẻ
                                    </div>
                                </div>
                            </div>

                            <div className="post-line"></div>

                            {/* Post input */}
                            <div className="post-inputs mt-15 mb-15">
                                <input type="text" className="post-input clear-input" placeholder="Viết bình luận..."/>
                                <div className="post-input-icon">
                                    <i className="fa fa-paper-plane"></i>
                                </div>
                            </div>

                            {/* post comment section */}
                            <div className="post-comments">
                                {/* comment item */}
                                <div className="post-comments-item">
                                    <div className="post-comments-item-avt">
                                        <img className="img-40x40" src="./img/author-image.png" alt="" />
                                    </div>
                                    <div className="post-comments-item-content">
                                        <div className="post-comments-item-name">
                                            Phạm Hoàng Tiến
                                        </div>
                                        <div className="post-comments-item-text">
                                            mặt nạ tinh bột trị mụn tốt
                                        </div>
                                    </div>
                                </div>

                                {/* comment item */}
                                <div className="post-comments-item">
                                    <div className="post-comments-item-avt">
                                        <img className="img-40x40" src="./img/author-image.png" alt="" />
                                    </div>
                                    <div className="post-comments-item-content">
                                        <div className="post-comments-item-name">
                                            Kimmizin
                                        </div>
                                        <div className="post-comments-item-text">
                                            tôi đã sử dụng qua sản phẩm này - thành phần tự nhiên nên ko gây kích ứng cho da . Giúp da dưỡng trắng sáng và da mịn màng hơn.Đây khá là sự lựa chọn yêu thích của bản thân
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default MMSCommunity;