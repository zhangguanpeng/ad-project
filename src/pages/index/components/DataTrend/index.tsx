import React from 'react';
import { cloneDeep } from 'lodash';
import { Select, Button, DatePicker } from 'antd';
import CardTabs from './components/CardTabs';
import LineChart from './components/LineChart';
import { CardItemType } from './components/CardTabs/types';
import './style.scss';

interface IProps { }

interface IStates { }

const { Option } = Select;

class Chart extends React.Component<IProps, IStates> {
    state = {
        cardData: [
            {
                id: '1',
                name: '消费（元）',
                value: 2000,
                persent: 28,
                icon: 'assets/imgs/card-icon1',
                isSelected: true,
            },
            {
                id: '2',
                name: '展现（次）',
                value: 5988,
                persent: 88.9,
                icon: 'assets/imgs/card-icon2',
                isSelected: false,
            },
            {
                id: '3',
                name: '点击（次）',
                value: 199,
                persent: 12.6,
                icon: 'assets/imgs/card-icon3',
                isSelected: false,
            },
        ],
        chartData: [
            {
                year: '2011',
                value: 3,
            },
            {
                year: '2012',
                value: 4,
            },
            {
                year: '2013',
                value: 3.5,
            },
            {
                year: '2014',
                value: 5,
            },
            {
                year: '2015',
                value: 4.9,
            },
            {
                year: '2016',
                value: 6,
            },
            {
                year: '2017',
                value: 7,
            },
            {
                year: '2018',
                value: 9,
            },
            {
                year: '2019',
                value: 13,
            },
        ],
    }

    handleCardTabsChange = (selectedId: string) => {
        const { cardData, chartData } = this.state;
        const newCardData = cardData.map((cardItem: CardItemType) => {
            const tempCardItem = cloneDeep(cardItem);
            if (tempCardItem.id === selectedId) {
                tempCardItem.isSelected = true;
            } else {
                tempCardItem.isSelected = false;
            }
            return tempCardItem;
        });
        const newChartData = chartData.map((chartItem) => {
            const tempChartItem = cloneDeep(chartItem);
            tempChartItem.value += 2;
            return tempChartItem;
        });
        this.setState({
            cardData: newCardData,
            chartData: newChartData,
        });
    }

    render() {
        const { cardData, chartData } = this.state;
        return (
            <div className="data-trend-component-box">
                <div className="header-box">
                    <div className="title">数据趋势</div>
                    <div className="select-area">
                        <Select
                            defaultValue="0"
                            style={{ width: 120 }}
                            // onChange={this.handlePromotionChange}
                            size="small"
                        >
                            <Option value="0">全部推广产品</Option>
                            <Option value="1">搜索推广</Option>
                            <Option value="2">一站式推广</Option>
                            <Option value="3">合约推广</Option>
                            <Option value="4">知识营销</Option>
                        </Select>
                        <DatePicker
                            // onChange={this.handalDateChange}
                            size="small"
                            style={{ marginLeft: 10 }}
                            placeholder="请选择日期"
                        />
                    </div>
                </div>
                <div className="card-tabs-box">
                    <CardTabs
                        cardData={cardData}
                        onChange={(selectedId: string) => { this.handleCardTabsChange(selectedId); }}
                    />
                </div>
                <div className="line-chart-box">
                    <LineChart
                        chartData={chartData}
                    />
                </div>
            </div>
        );
    }
}

export default Chart;
