import React from 'react';
 import mainLogo from './../../assects/about/portfolio_2.png'
import secondLogo from './../../assects/about/portfolio_3.png'
function WelcomeImage(props) {
    return (
        <div className='text-center '>
            <img className={''}
                 width={300}
                 src={secondLogo}
                 loading="lazy"
            />
        </div>

    );
}

export default WelcomeImage;