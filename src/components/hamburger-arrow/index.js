import React, {useState} from 'react';
import classNames from 'classnames'

import './style.css';

export const HamburgerArrow = () => {
    const [isActive, setIsActive] = useState(false);
    return(
        <div
            className={classNames("hamburger", "hamburger--arrowalt", {"is-active": isActive})}
            onClick={() => setIsActive(!isActive)}
        >
            <div className="hamburger-box">
                <div className="hamburger-inner"></div>
            </div>
        </div>
    )
};