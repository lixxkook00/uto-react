import React,{ useState,useEffect} from 'react';
import './ShopDetail.scss'
import CartMarket from '../../Carts/CartMarket'
import MyData from '../../../data/data.json'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

let firstList = [];
let quantityProductPerPage = 21;

function ShopDetail(props) {

    let {_id} = props.match.params

    
    // get first product list
    useEffect(() => {
        firstList =  MyData.product.filter((product) => product.shopID === _id)
    },[])
    
    // get quantity page
    const pageNum = (firstList.length%quantityProductPerPage) > 0 
                    ? Math.floor(firstList.length/quantityProductPerPage) +1 
                    : Math.floor(firstList.length/quantityProductPerPage)

    // handle pagination
    const [currentProductList,setCurrentProductList] = useState([])
    const [currentPage,setCurrentPage] = useState(1)

    const quantityPage = (Math.floor(firstList.length/quantityProductPerPage))+1

    // const co = firstList.length%2


    // handle next/prev button
    const handleNextPrevButton = (action) => {
        switch (action) {
            case "Go to previous page":
                setCurrentPage(currentPage-1)
                break;
            case "Go to next page":
                setCurrentPage(currentPage+1)
                break
            default:
                break;
        }
    }

    useEffect(() => {
        const currentProductListTemp = [...firstList]
        // get index of current page
        const firstProductIndex = (currentPage-1)*quantityProductPerPage;
        const lastProductIndex = (currentPage*quantityProductPerPage) >= (currentProductListTemp.length) 
                                ? currentProductListTemp.length 
                                : (currentPage*quantityProductPerPage)

        
        // create new product list
        const newProductList = currentProductListTemp.slice(firstProductIndex,lastProductIndex)

        // console.log(currentPage,firstProductIndex,lastProductIndex,firstList.length,newProductList)
        setCurrentProductList(newProductList)
    },[currentPage])


    return (
        <div className="shop-content">
            {/* shop infor */}
            <div className="post">
                <div className="shop">
                    <div className="shop-cover">
                        <img src="./img/H??ng M??? X??ch Tay.png" alt="" />
                    </div>
                    <div className="shop-back">
                        <div className="shop-avt">
                            <img src="./img/516D546A6B7A7239524E57524B6D554B425A78345938536D4B446B41347344737A653857697950484A7353333876.png" alt="" />
                            <div className="shop-infor-owner">
                                Qu???n l?? b???i Kimmizin
                            </div>
                        </div>
                        <div className="shop-infor">
                            <div className="shop-infor-name">
                                H??ng M??? X??ch Tay
                            </div>
                            <div className="shop-infor-id">
                                {_id}
                            </div>
                            
                            <div className="shop-infor-address">
                                <i className="fa-solid fa-location-pin"></i>
                                Khu Nam Vi??n, Khu Bi???t Th??? Ph?? M??? H??ng Th??nh ph??? H??? Ch?? Minh
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* all product this shop */}
            <div className="post">
                {/* title */}
                <div className="market-title market-title--blue">
                    t???t c??? s???n ph???m
                </div>

                {/* product list */}
                <div className="container">
                    <div className="row">
                        
                        {
                            currentProductList.map((product,index) => {
                                return (
                                    <CartMarket key={index} product={product}/>
                                )
                            })
                        }
                    </div>
                </div>

                {/* pagination */}
                <Stack spacing={2} className="col-xl-12">
                    <Pagination 
                        onChange={(e) => {
                            setCurrentPage(parseInt(e.target.innerText))
                            handleNextPrevButton(e.currentTarget.getAttribute("aria-label"))
                        }}
                        count={pageNum} 
                        color="primary" 
                    />
                </Stack>
            </div>
        </div>
    );
}

export default ShopDetail;