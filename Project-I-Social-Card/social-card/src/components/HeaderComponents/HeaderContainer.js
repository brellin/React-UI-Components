import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail/ImageThumbnail';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import HeaderContent from './HeaderContent/HeaderContent';

const HeaderContainer = () => {
    return (
        <div className='headerContainer'>
            <ImageThumbnail />
            <div className="vertical">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderContainer;