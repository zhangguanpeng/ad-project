import React from 'react';
import './style.scss';

interface IProps { }

interface IStates { }

class Account extends React.Component<IProps, IStates> {
    state = {}

    render() {
        return (
            <div>这里是Account组件</div>
        );
    }
}

export default Account;
