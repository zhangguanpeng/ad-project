import React, { Component } from 'react';
import './style.scss';

interface IProps { }

class UserPortrait extends Component<IProps> {
    render() {
        return (
            <div className="account-component-box">
                UserPortrait组件
            </div>
        );
    }
}

export default UserPortrait;
