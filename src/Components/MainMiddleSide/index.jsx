import React,{useEffect,useRef} from 'react';
import './MainMiddleSide.scss'

import {BrowserRouter as Route,Switch} from 'react-router-dom';

import MMSCommunity from '../MMS/MMSCommunity'
import MMSLogistic from '../MMS/MMSLogistic'
import MMSServices from '../MMS/MMSServices'
import MMSEdu from '../MMS/MMSEdu'
import MMSMarket from '../MMS/MMSMarket'
import ProductDetail from '../Details/ProductDetail'
import ShopDetail from '../Details/ShopDetail';

// Footer
import Footer from '../Footer'


function MainMiddleSide() {
    const myRef = useRef(null)

    useEffect(() =>{
        myRef.current.scrollIntoView()  
    })

    return (
        <div className="main-content">
            <div className="all-content" ref={myRef}>
                {/* <ScrollToTop/> */}
                <Switch>
                    <Route path="/community">
                        < MMSCommunity/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/services">
                        < MMSServices/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/logistic">
                        < MMSLogistic/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/edu">
                        < MMSEdu/>
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/">
                        < MMSMarket/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/market/:_id" component={ProductDetail} />
                </Switch>

                <Switch>
                    <Route path="/shop/:_id" component={ShopDetail} />
                </Switch>

                <Footer/>
            </div>
        </div>
    );
}

export default MainMiddleSide;