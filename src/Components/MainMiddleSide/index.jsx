import React from 'react';
import './MainMiddleSide.scss'
import MMSCommunity from '../MMSCommunity'
import MMSLogistic from '../MMSLogistic'
import MMSTech from '../MMSTech'
import MMSEdu from '../MMSEdu'
import MMSMarket from '../MMSMarket'


// Footer
import Footer from '../Footer'


function MainMiddleSide({indexSelected}) {
    // console.log('MainMiddleSide',indexSelected)

    return (
        <div className="main-content">
            { indexSelected === 0 && < MMSCommunity/> }
            { indexSelected === 1 && < MMSTech/> }
            { indexSelected === 2 && < MMSMarket/> }
            { indexSelected === 3 && < MMSLogistic/> }
            { indexSelected === 4 && < MMSEdu/> }

            <Footer/>
        </div>
    );
}

export default MainMiddleSide;