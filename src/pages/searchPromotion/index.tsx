import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '@components/Header';
import DataTrend from '@components/DataTrend';
import Account from './components/Account';
// import DataTrend from './components/DataTrend';
import WaveAnalysis from './components/WaveAnalysis';
import UserPortrait from './components/UserPortrait';
import './style.scss';

const cardData = [
    {
        id: '1',
        name: '消费（元）',
        value: 2000,
        persent: '',
        icon: 'assets/imgs/card-icon1',
        isSelected: true,
    },
    {
        id: '2',
        name: '展现（次）',
        value: 5988,
        persent: '',
        icon: 'assets/imgs/card-icon2',
        isSelected: false,
    },
    {
        id: '3',
        name: '点击（次）',
        value: 199,
        persent: '',
        icon: 'assets/imgs/card-icon3',
        isSelected: false,
    },
    {
        id: '4',
        name: '展现人数（人）',
        value: 20000,
        persent: '',
        icon: 'assets/imgs/card-icon3',
        isSelected: false,
    },
    {
        id: '5',
        name: '点击人数（人）',
        value: 8000,
        persent: '',
        icon: 'assets/imgs/card-icon3',
        isSelected: false,
    },
];

interface IProps extends RouteComponentProps { }

class SearchPromotionPage extends Component<IProps> {
    render() {
        return (
            <div className="search-promotion-page-box">
                <div className="header">
                    <Header />
                </div>
                <div className="content">
                    <div className="account-box">
                        <Account />
                    </div>
                    <div className="data-trend-box">
                        <div className="data-trend-title">数据趋势</div>
                        <DataTrend
                            cardData={cardData}
                        />
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
