import React,{useEffect,useRef} from 'react';
import './MainMiddleSide.scss'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import MMSCommunity from '../MMS/MMSCommunity'
import MMSLogistic from '../MMS/MMSLogistic'
import MMSTech from '../MMS/MMSTech'
import MMSEdu from '../MMS/MMSEdu'
import MMSMarket from '../MMS/MMSMarket'
import ProductDetail from '../Details/ProductDetail'
import ScrollToTop from '../ScrollToTop'

// Footer
import Footer from '../Footer'


function MainMiddleSide({indexSelected}) {
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
                    <Route path="/tech">
                        < MMSTech/>
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

                <Footer/>
            </div>
        </div>
    );
}

export default MainMiddleSide;