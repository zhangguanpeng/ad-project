import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Account from './components/Account';
import DataTrend from './components/DataTrend';
import WaveAnalysis from './components/WaveAnalysis';
import UserPortrait from './components/UserPortrait';
import './style.scss';

interface IProps extends RouteComponentProps { }

class SearchPromotionPage extends Component<IProps> {
    render() {
        return (
            <div className="search-promotion-page-box">
                <div className="header"> </div>
                <div className="content">
                    <div className="account-box">
                        <Account />
                    </div>
                    <div className="data-trend-box">
                        <DataTrend />
                    </div>
                    <div className="wave-analysis-box">
                        <WaveAnalysis />
                    </div>
                    <div className="user-portrait-box">
                        <UserPortrait />
                    </div>
                </div>
                <div className="footer"> </div>
            </div>
        );
    }
}

export default SearchPromotionPage;
