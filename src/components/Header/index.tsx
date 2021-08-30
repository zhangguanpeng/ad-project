import React from 'react';
import './style.scss';

interface IProps { }

interface IStates { }

class Header extends React.Component<IProps, IStates> {
    state = {}

    render() {
        return (
            <div>这里是Header组件</div>
        );
    }
}

export default Header;
