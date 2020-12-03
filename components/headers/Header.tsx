import React from 'react';
import HeaderButton from '../buttons/HeaderButton';

const Header: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-4 content-center h-14 p-4">
            <div><h1 className="text-2xl">F r u i t&nbsp;S e l l e r</h1></div>
            <div className="">
                <HeaderButton name="My Bag" />
                <HeaderButton name="Log in" />
            </div>
        </div>
    );
}

export default Header;