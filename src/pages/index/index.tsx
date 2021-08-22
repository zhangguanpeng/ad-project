import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
import axios from 'axios';
import moment from 'moment';
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

    handleDateChange = (date: moment.Moment | null) => {
        console.log('date change', moment(date).unix());
    }

    render() {
        return (
            <div className="index-page">
                <div className="middle-box">
                    <span>here is index page.</span>
                    <Button type="primary">按钮</Button>
                </div>
                <div>
                    <DatePicker onChange={this.handleDateChange} />
                </div>
            </div>
        );
    }
}

export default IndexPage;
