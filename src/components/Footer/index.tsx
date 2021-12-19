import React from 'react';
import { MENU_FOOTER_CONFIG } from 'common/constants/menu';
import './style.scss';

interface IProps {}
interface IStates {}

class Footer extends React.Component<IProps, IStates> {
    render() {
        return (
            <div className="footer-component-box">
                <div className="footer-menu">
                    {
                        MENU_FOOTER_CONFIG.map((menuItem, index) => (
                            <div
                                className="footer-menu-item"
                                key={`footer-menu-item${index.toString()}`}
                            >
                                {menuItem.title}
                            </div>
                        ))
                    }
                </div>
                <div className="footer-copyright">©2021 Muke 使用慕课前必读 京公安网备 10100000号 互联网信息服务许可 我已阅读并接受慕课推广服务合同 欢迎访问慕课推广政策中心</div>
            </div>
        );
    }
}

export default Footer;
