import React, { Component } from 'react';
import './style.scss';

interface IProps { }

class Account extends Component<IProps> {
    render() {
        return (
            <div className="account-component-box">
                account组件
            </div>
        );
    }
}

export default Account;
