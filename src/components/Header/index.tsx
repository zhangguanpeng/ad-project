import React from 'react';
import { MENU_INDEX_CONFIG } from 'common/constants/menu';
import { UserOutlined } from '@ant-design/icons';
import MenuItem from './MenuItem';
import './style.scss';

interface IProps { }

interface IStates { }

class Header extends React.Component<IProps, IStates> {
    state = {}

    render() {
        const userName = '上古鹏';
        return (
            <div className="header-component-box">
                <div className="left">
                    <div className="logo"> </div>
                    <div className="menu">
                        {
                            MENU_INDEX_CONFIG.map((menuItem, index) => (
                                <MenuItem
                                    menuItemInfo={menuItem}
                                    isActive={menuItem.isActive}
                                    key={`index-menu-item${index.toString()}`}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="user-info">
                    <UserOutlined />
                    <span className="user-name">{userName}</span>
                </div>
            </div>
        );
    }
}

export default Header;
