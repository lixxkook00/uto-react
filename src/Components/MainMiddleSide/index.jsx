import React from 'react';
import './MainMiddleSide.scss'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import MMSCommunity from '../MMS/MMSCommunity'
import MMSLogistic from '../MMS/MMSLogistic'
import MMSTech from '../MMS/MMSTech'
import MMSEdu from '../MMS/MMSEdu'
import MMSMarket from '../MMS/MMSMarket'
import ProductDetail from '../Details/ProductDetail'


// Footer
import Footer from '../Footer'


function MainMiddleSide({indexSelected}) {
    // console.log('MainMiddleSide',indexSelected)

    return (
        <div className="main-content">
            <Switch>
                <Route exact path="/community">
                    < MMSCommunity/>
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/tech">
                    < MMSTech/>
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/logistic">
                    < MMSLogistic/>
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/edu">
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
    );
}

export default MainMiddleSide;