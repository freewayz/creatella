import React from 'react';

function Ads(props) {
    const adsUrl = `/ads/?r=${Math.floor(Math.random()*1000)}`
    return (
        <div className="ad">
            <img  src={adsUrl}/>
        </div>
    )
}
Ads.displayName = 'Ads';
export default Ads;