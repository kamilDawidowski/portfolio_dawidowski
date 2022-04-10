import React from 'react';
import './header.css'
function MenuButtoon(props) {
    return (
        <div className='button-menu'>
            {props.text}
        </div>
    );
}

export default MenuButtoon;