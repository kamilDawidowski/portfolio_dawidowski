import React from 'react';
import secondLogo from "../../assects/about/portfolio_3.png";
import './skill.css'
function SkillImage(props) {
    return (
        <div className='text-center '>
            <img
                width={'80%'}
                 // width={300}

                 src={props.src}
                 loading="lazy"
            />
        </div>
    );
}

export default SkillImage;