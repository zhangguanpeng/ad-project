import React, { Component } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import './style.scss';

interface Props { }

class IndexPage extends Component<Props> {
    componentDidMount() {
        axios.get('/ad/index/gray').then((res) => {
            console.log('res', res);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="index-page">
                <div className="middle-box">
                    <span>here is index page.</span>
                    <Button type="primary">按钮</Button>
                </div>
            </div>
        );
    }
}

export default IndexPage;
