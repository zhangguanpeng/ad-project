import React, { Component } from 'react';
import { Button } from 'antd';
// import './style.scss';

interface Props { }

class IndexPage extends Component<Props> {
    render() {
        return (
            <div className="box">
                Hello, React.
                <span>here is index page.</span>
                <Button type="primary">按钮</Button>
            </div>
        );
    }
}

export default IndexPage;
