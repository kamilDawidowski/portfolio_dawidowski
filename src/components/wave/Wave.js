import React from 'react';
import logo from '../../assects/about/fala-down.svg'
function Wave(props) {
    return (
        <div>
            <img
                width={'100%'}
                // width={300}

                src={logo}
                loading="lazy"
            />
        </div>
    );
}

export default Wave;